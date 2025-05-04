// 判断当前环境
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
const isBrowser = typeof window === 'object' && typeof document === 'object';
let fs = null;

async function getFS() {
    fs = fs || await import('fs');
    return fs;
}

export async function getPath() {
    const path = await import('path');
    const url = await import('url');

    function getDirname(importMetaUrl) {
        return path.dirname(url.fileURLToPath(importMetaUrl));
    }

    function getModuleDirname() {
        return getDirname(import.meta.url);
    }

    const __dirname = getModuleDirname();

    const dbPath = path.join(__dirname, 'db.json'); // 数据库存储位置
    return dbPath;
}

export async function getData(dbPath) {
    fs = await getFS();
    if (fs.existsSync(dbPath)) {
        return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    } else {
        return {};
    }
}

export async function setItem(key, value, dbPath) {
    fs = await getFS();
    const data = await getData(dbPath);
    data[key] = value;
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));
}

export async function getItem(key, dbPath) {
    const data = await getData(dbPath);
    return data[key];
}

export async function removeItem(key, dbPath) {
    const data = await getData(dbPath);
    delete data[key];
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));
}

async function getLocalStorage(path) {
    if (isBrowser) {
        console.log('Running in a browser environment.');
        return localStorage;
    }
    if (isNode) {
        console.log('Running in a Node.js environment.');
        fs = await import('fs');
        const dbPath = path || await getPath();

        return {
            getItem: (key) => getItem(key, dbPath),
            setItem: (key, value) => setItem(key, value, dbPath),
            removeItem: (key) => removeItem(key, dbPath)
        }
    } else {
        throw new Error('Unknown environment.');
    }
}

export default getLocalStorage;
