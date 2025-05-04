import getLocalStorage from '../nodejs/localStorage.mjs';

export function parseCookieToArray(cookieStr) {
  if (cookieStr.join) {
    return cookieStr.flatMap((cookie) => parseCookie(cookie));
  }
  return cookieStr.split(';').map(cookie => {
    const [nameValue, ...attributes] = cookie.trim().split(';');
    const [name, value] = nameValue.split('=').map(s => s.trim());
    const cookieObj = { name, value: decodeURIComponent(value) }; 
    attributes.forEach(attr => {
      const [key, val] = attr.split('=').map(s => s.trim());
      cookieObj[key] = val || true; // 处理无值的属性（如HttpOnly）
    });
    return cookieObj;
  });
}

function parseCookieToObj(cookieStr) {
  if (cookieStr.join) {
    return cookieStr.reduce((obj, cookie) => Object.assign(obj,parseCookie(cookie)), {});
  }
  return cookieStr.split(';').reduce((obj, cookie) => {
    const [nameValue, ...attributes] = cookie.trim().split(';');
    const [name, value] = nameValue.split('=').map(s => s.trim());
    Object.assign(obj, {[name]: decodeURIComponent(value)});
    return obj;
  }, {});
}

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
    return null;
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
      const results = {
        result: [],
        metadata: { title: "", reasoning_details: [] }
      };
      const texts = [];
      const textDecoder = new TextDecoder("utf-8");  
      let partialData = ""; // Buffer for incomplete events  
      while (true) {  
        let { done, value } = await reader.read(); // Read data from the stream  
        if (done) { 
            if (typeof onEvent === 'function') {// Callback for processing the event
              onEvent(value, done);
            } 
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
            const data = json.data || json;
            const {metadata} = data.agent_status || {};
            const text = data.text || '';
            if (text) {
              results.result.push(text);
            }
            if (metadata) {
              const {title, reasoning_detail} = metadata;
              if (title) {
                results.metadata.title = title;
              }
              if (reasoning_detail) {
                results.metadata.reasoning_details.push(reasoning_detail);
              } 
              
            }
          });
      }  
    }

    const result = results.result.join('');
    const title = results.metadata.title;
    const reasons = results.metadata.reasoning_details.join('');
    return {
      title,
      reasons,
      result
    };
  } catch (error) {
    console.log(`Error parsing event: ${error.message}, Event data: `, error);
    if (typeof onError === 'function') {
      return onError(error);  
    }
    throw error;
  }
}

export const eventStream = async (reader, datas = [], isError = false) => {
  let { value, done } = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const chunk = decoder.decode(value, { stream: true });

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

export const getController = () => new AbortController();
export const abort = (controller) => controller.abort();

export const request = async (url,  config = {}) => {
  if (!url) {
    console.error('url is Invalid', url);
    return;
  }

  const { url: uri, data = undefined, headers = {}, controller = {}, success, saveCookie, ...option } = 
    typeof url === 'object' ? Object.assign({}, config, url) : Object.assign({}, config, {url});
  url = uri;
  console.log('API request: ', new Date().toString(), url, JSON.stringify(data), JSON.stringify(headers), controller);
  try {

    const body = headers['Content-Type'].includes('application/x-www-form-urlencoded') ? 
                  new URLSearchParams(data).toString() : data ? JSON.stringify(data) : null;
    const response = await fetch(url, {
      signal: controller.signal,
      method: data ? "POST" : "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
          // "Content-Type": "application/json",
        //   'Content-Type': 'application/x-www-form-urlencoded',
        'Connection': 'keep-alive',
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

    console.log('API Response', new Date().toString(), url, response);

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
    const cookie_value = response.headers.getSetCookie();
    console.log('=======Cookie:', cookie_value);
    if (saveCookie && cookie_value) {
      const {hostname, pathname} = new URL(url);
      const key = hostname + '/' + pathname;
      const localStorage = await getLocalStorage('./cookie.json');
      localStorage.setItem(key, cookie_value);
    }
    const type = response.headers.get('Content-Type')?.split(';')[0];
    if (type === 'text/event-stream') {
      const reader = response.body.getReader();
      const datas = await parseEventStream(reader, success);
      return datas;
    }
    if (typeof success === 'function') {
      return success(response);
    }
    if (type === 'application/wasm') {
      const buffer = await response.arrayBuffer();
      return WebAssembly.instantiate(buffer, {wbg: {}});
    }
    if (type === 'text/html' || type === 'text/plain') {
      return await response.text();
    }
    if (type === 'application/json') {
      const data = await response.json();
      return data;
    }
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestControl = (url, config = {}) => {
  const controller = getController();
  config.controller = controller;
  const promise = request(url, config);

  return {
    promise,
    controller
  };
}

export default request;