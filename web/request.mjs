
console.log(fetch);

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

export const eventStream = async (reader, datas = []) => {
  let { value, done } = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const chunk = decoder.decode(value, { stream: true });

  console.log('--------====:', chunk); // Get the data part  
  const events = chunk.split("\n\n"); // Split on double newlines
  console.log(events, 'Received data====:', chunk); // Get the data part  
  let words = '', data = '';
  try {
    for (const event of events) {
      data = event.split("\n").find(line => line.startsWith("data:"))?.slice(5); 
      done = done || data === "[DONE]";
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
    return error;
  }
};

export const request = (url,  config = {}) => {
  if (!url) {
    console.error('url is Invalid', url);
    return;
  }

  const { url: uri, data = undefined, headers = {}, success, stream, ...option } = 
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
      if (typeof success === 'function') {
        return resolve(success(response));
      }
      const type = response.headers.get('Content-Type').split(';')[0]; 
      if (type === 'text/event-stream') {
        const reader = response.body.getReader();
        const datas = await eventStream(reader, stream);
        return resolve(datas);
      }
      if (type === 'text/html' || type === 'text/plain') {
        return resolve(response.text());
      }
      if (type === 'application/json') {
        return resolve(response.json());
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
  promise.controller = controller;
  return promise;
};

export default request;