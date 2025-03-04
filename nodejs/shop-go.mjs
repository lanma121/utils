import {request} from './request.mjs';

request('https://mars.jd.com', {headers: {
    "User-Agent": "Dalvik/2.1.0 (Linux;U;Android 13;PENM)) Build.TP1A.220905.001)",
}}).then(res => {
    console.log(res);
})
console.log();