export const request = (url, { data = undefined, ...option } = {}) => {
  console.log('API request: ', url, data);
  const controller = new AbortController();
  const result = new Promise(async (resolve, reject) => {
    try {
      const datas = data ? { data: JSON.stringify(data) } : {};
      const response = await fetch(url, {
        signal: controller.signal,
        method: data ? "POST" : "GET", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          //   "Content-Type": "application/json",
          //   'Content-Type': 'application/x-www-form-urlencoded',
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        },
        ...option,
        ...datas,
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      resolve(response.json());
    } catch (error) {
      console.error(error);
      reject();
    }
  });
  result.controller = controller;
  return result;
};
