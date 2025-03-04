export const processStream = async (reader, text = '') => {
  let { value, done } = await reader.read();
  if (done) {
    try {
      return JSON.parse(text);
    } catch (error) {
      return text;
    }
  };
  const decoder = new TextDecoder("utf-8");
  const chunk = decoder.decode(value, { stream: true });
  if (typeof text === 'function') {
    text(chunk);
  } else {
    text += chunk;
  }
  return processStream(reader, text);
}

export const stringToJson = (param) => {
  if (!param || typeof param !== 'string') {
    console.error(param + ' is not string');
  }
  try {
    const signo = param.indexOf('{');
    const signa = param.indexOf(']');
    const sign = signa >= 0 && signa < signo ? ']' : signo >= 0 ? '}' : ']';
    const start = sign === ']' ? signa : signo;
    const end = param.lastIndexOf(sign) + 1;
    return JSON.parse(param.substring(start, end));
  } catch (error) {
    console.error(param + ' parse error');
    return null;
  }
}

async function parseEventStream(reader, onEvent, onError) {  
  try {  
      const texts = [];
      const textDecoder = new TextDecoder("utf-8");  
      let partialData = ""; // Buffer for incomplete events  
      while (true) {  
        let { done, value } = await reader.read(); // Read data from the stream  
        if (done) {  
            break; // Exit loop if done  
        }  
        partialData += textDecoder.decode(value, { stream: true }); // Decode the data
        //SSE-specific splitting (e.g., events separated by \n\n)  
        const events = partialData.split('\n\n'); // Adjust delimiter if needed  
        console.log('=====', events);

        partialData = events.pop() || ""; // Store the last (potentially incomplete) event  
        for (const event of events) {  
          if (event.trim() === "") continue;  // Skip empty events  
          event.split("\n").forEach((line) => {
            const json = line && stringToJson(line);
            if (!json) return; 
            if (typeof onEvent === 'function') {// Callback for processing the event
              onEvent(json);
            }
            const text = json.data?.text || '';
            if (text) {
              texts.push(text);
            }
          });
          
            
      }  
    }
    console.log('--------finished', texts);
    return texts.join('');
  } catch (error) {
    console.log(r(`Error parsing event: ${parseError.message}, Event data: ${event}`));
    if (typeof onError === 'function') {
      onError(new Error(`Error parsing event: ${parseError.message}, Event data: ${event}`));  
    }
    throw error;
  }  
}  

export const eventStream = async (reader, datas = [], isError = false) => {
  let { value, done } = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const chunk = decoder.decode(value, { stream: true });

  console.log(done, '--------====:', chunk); // Get the data part  
  const events = chunk.split("\n\n"); // Split on double newlines
  console.log(events, 'Received data====:', chunk); // Get the data part  
  let words = '', data = '';
  try {
    for (const event of events) {
      data = event.split("\n").find(line => line.startsWith("data:"))?.slice(5); 
      done = done || data === "[DONE]" || data === " [DONE]";
      if (data && !done) {
        const text = JSON.parse(data).data?.text;
        if (text) {
          words += text;
        }
      }  
    }
    if (typeof datas === 'function') {
      datas(words);
    } else {
      datas.push(words);
    }
    if (done) return datas;
    // Continue processing the stream
    return eventStream(reader, datas);
  } catch (error) {
    console.error(error);
    if (!isError) {
      eventStream(reader, datas, true);
    }
    return error;
  }
};

export const request = (url,  config = {}) => {
  if (!url) {
    console.error('url is Invalid', url);
    return;
  }

  const { url: uri, data = undefined, headers = {}, success, ...option } = 
    typeof url === 'object' ? Object.assign({}, config, url) : Object.assign({}, config, {url});
  url = uri;
  console.log('API request: ', url, data);
  
  const controller = new AbortController();
  const promise = new Promise(async (resolve, reject) => {
    try {
      const body = data ? JSON.stringify(data) : null;
      const response = await fetch(url, {
        signal: controller.signal,
        method: data ? "POST" : "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            // "Content-Type": "application/json",
          //   'Content-Type': 'application/x-www-form-urlencoded',
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
          ...headers
        },
        ...option,
        body,
        // credentials: "include", // This line ensures cookies are sent with the request
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });

      console.log('_____===____', response)

      if (!response.ok) {
        const message = await response.text();
        throw new Error(
          JSON.stringify({
            url,
            message,
            status: response.status,
            statusText: response.statusText,
            type: response.type
          })
        );
      }
      const type = response.headers.get('Content-Type').split(';')[0];
      if (type === 'text/event-stream') {
        const reader = response.body.getReader();
        const datas = await parseEventStream(reader, success);
        return resolve(datas);
      }
      if (typeof success === 'function') {
        return resolve(success(response));
      }
      if (type === 'application/wasm') {
        const buffer = await response.arrayBuffer();
        return resolve(WebAssembly.instantiate(buffer, {wbg: {}}));
      }
      if (type === 'text/html' || type === 'text/plain') {
        return resolve(response.text());
      }
      if (type === 'application/json') {
        return resolve(response.json());
      }
      resolve(response);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
  promise.controller = controller;
  return promise;
};

export default request;