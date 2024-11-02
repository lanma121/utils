import http from 'http';
import fss from 'fs';
const { promises : fsAsync, ...fs }  = fss;
// const { websockt } = require('./web-socket');

const hostname = '192.168.1.13';
const port = 3006;

const caches = {};
const paths = {
  english: `./english-learning.html`,
  index: `./google-translate.html`,
}

const getFileStat = async(path) => {
  try {
    return fsAsync.stat(path);
  } catch (error) {
    throw(error);
  }
}

const getPath = (path = '') => {
  if (fs.existsSync(path)) {
    return path;
  }
  throw new Error(`path is not config, path: ${path}`);
}

const parseUrl = (url = '') => {
  const [route, search = '' ] = url.slice(1).split('?');
  const path = fs.existsSync(url) ? url : (paths[route] || `/${route}`);
  return {
    url,
    route,
    path,
    params: search.split('&').reduce((param, item) => {
      if (!item) return param;
      const [key, value] = item.split('=');
      param[key] = decodeURIComponent(value);
      return param;
    }, {}),
  }
}

const getFile = async(path, option, cache) => {
  try {
    path = getPath(path);
    const key = path.replace(/[ \/\.]/g, '_');
    if (cache && caches[key]) {
      return caches[key];
    }
    const content = await fsAsync.readFile(path, option);
    if (cache) {
      caches[key] = content;
    }
    return content;
  } catch (error) {
    throw(error);
  }
}

// let ws;
// (async() => {
//   ws = await websockt();
// })();

const wsSend = async (data) => {
  ws.send(data);
  return {};
}

const handleMedia = async (req, res) => {
  try {
    const path = getPath(parseUrl(req.url).path);
    const stat = await getFileStat(path);
    const MIME =  req.headers['content-type'] || path.endsWith('.mp4') ? 'video/mp4' : 'audio/mpeg';

    // Parse the range header
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': MIME,
      });
      const readStream = fs.createReadStream(path, { start, end });
      readStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stat.size,
        'Content-Type': MIME
      });
      const readStream = fs.createReadStream(path);
      readStream.pipe(res);
    }
  } catch (error) {
    res.writeHead(500);
    res.end(error.message);
  }
}

const server = http.createServer((req, res) => {
  // if (req.url.includes('favicon.ico')) return;
  res.setHeader('Access-Control-Allow-Origin', "*");
  const {path, params, route} = parseUrl(req.url);
  const file = path;
  console.log('http api request:', req.url, path, route, params);

  const MIME = req.headers['content-type'] ||
      file.endsWith('.html') ? 'text/html' :
      file.endsWith('.xml') ? 'text/xml' :
      (file.endsWith('.js') || file.endsWith('.mjs')) ? 'application/javascript' :
      file.endsWith('.json') ? 'application/json' :
      file.endsWith('.jpeg') ? 'image/jpeg' :
      file.endsWith('.png') ? 'image/png' :
      file.endsWith('.mp3') ? 'audio/mpeg' :
      file.endsWith('.mp4') ? 'video/mp4' :
      file.endsWith('.jpg') ? 'image/jpg' :
      file.endsWith('.css') ? 'text/css' : 'text/plain';

  res.setHeader('Content-Type', MIME);

  if (req.method === 'POST' || MIME === 'application/json') {
    var body = '';
    req.on('data', function(chunk){    
      body += chunk;
    });

    req.on('end', async() => {
        const data = JSON.parse(body);
        console.log('http api request data:', data);
        let response = {};
        if (route === 'translate') {
          response = await wsSend(data.content);
        }
        res.end(JSON.stringify({status: 200, msg: 'ok', ...response}));
    });
    return;
  }
  // handle stream media
  if (path.endsWith('.mp4') || path.endsWith('.mp3')) {
    handleMedia(req, res);
    return;
  }
  getFile(path).then((data) => {
    
    
    res.statusCode = 200;
    res.end(data);
  }).catch((error) => {
    console.error('get files error:', error);
    res.writeHead(500);
    res.end(error.message);
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
