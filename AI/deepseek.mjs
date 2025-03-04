// https://chat.deepseek.com/api/v0/chat/completion

import request from './request.mjs';


export async function deepseek() {
    // const aa = await request('https://api.deepseek.com/chat/completions', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer sk-e11be63ded82466ab80e315d2ae2a255',
    //     },
    //     data: {"model": "deepseek-chat",
    //     "messages": [
    //       {"role": "system", "content": "You are a helpful assistant."},
    //       {"role": "user", "content": "Hello!"}
    //     ],
    //     "stream": false  }
    // });

    // console.log('======', aa);

    // return;
    // const { data } = await request('https://chat.deepseek.com/api/v0/chat_session/create', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer zl47Fp0OUsx6N38W2QXkY42yhArhCINN1sdE8YEa1vm0x6h+4VeiXMROE7JBFDkE',
    //     },
    //     data: { character_id: null }
    // });
    const chat_session_id = 
    'd9f5f066-76aa-4c60-87ba-6e7b464041d8'; 
    // data.biz_data.id;
    console.log('======', chat_session_id);
    // const ss = await request('https://chat.deepseek.com/api/v0/events', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Connection': 'keep-alive',
    //         'Authorization': 'Bearer zl47Fp0OUsx6N38W2QXkY42yhArhCINN1sdE8YEa1vm0x6h+4VeiXMROE7JBFDkE',
    //     },
    //     data: {
    //         "events": [
    //             {
    //                 "session_id": "session_v0_h9err5o70jf",
    //                 "client_timestamp_ms": new Date().getTime(),
    //                 "event_name": "__reportEvent",
    //                 "event_message": "调用上报事件接口",
    //                 "payload": {
    //                     "__location": "https://chat.deepseek.com/a/chat/s/" + chat_session_id,
    //                     "__ip": "165.225.62.217",
    //                     "__region": "US",
    //                     "__pageVisibility": "true",
    //                     "__nodeEnv": "production",
    //                     "__deployEnv": "production",
    //                     "__appVersion": "20241129.1",
    //                     "__commitId": "daf8e6ad",
    //                     "__userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    //                     "__referrer": "https://accounts.google.com/",
    //                     "method": "post",
    //                     "url": "/api/v0/events",
    //                     "path": "/api/v0/events"
    //                 },
    //                 "level": "info"
    //             },
    //             {
    //                 "session_id": "session_v0_h9err5o70jf",
    //                 "client_timestamp_ms": new Date().getTime(),
    //                 "event_name": "__httpResponse",
    //                 "event_message": "httpResponse GET /version.txt, 2643ms, reason: none",
    //                 "payload": {
    //                     "__location": "https://chat.deepseek.com/a/chat/s/" + chat_session_id,
    //                     "__ip": "165.225.62.217",
    //                     "__region": "US",
    //                     "__pageVisibility": "true",
    //                     "__nodeEnv": "production",
    //                     "__deployEnv": "production",
    //                     "__appVersion": "20241129.1",
    //                     "__commitId": "daf8e6ad",
    //                     "__userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    //                     "__referrer": "https://accounts.google.com/",
    //                     "url": "/version.txt",
    //                     "path": "/version.txt",
    //                     "method": "GET",
    //                     "metricDuration": 2643,
    //                     "status": "200",
    //                     "logId": "[unset]"
    //                 },
    //                 "level": "info"
    //             },
    //             {
    //                 "session_id": "session_v0_h9err5o70jf",
    //                 "client_timestamp_ms":  new Date().getTime(),
    //                 "event_name": "__httpResponse",
    //                 "event_message": "httpResponse GET /api/v0/users/feature_quota, 2676ms, reason: none",
    //                 "payload": {
    //                     "__location": "https://chat.deepseek.com/a/chat/s/" + chat_session_id,
    //                     "__ip": "165.225.62.217",
    //                     "__region": "US",
    //                     "__pageVisibility": "true",
    //                     "__nodeEnv": "production",
    //                     "__deployEnv": "production",
    //                     "__appVersion": "20241129.1",
    //                     "__commitId": "daf8e6ad",
    //                     "__userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    //                     "__referrer": "https://accounts.google.com/",
    //                     "url": "/api/v0/users/feature_quota",
    //                     "path": "/api/v0/users/feature_quota",
    //                     "method": "GET",
    //                     "metricDuration": 2676,
    //                     "status": "200",
    //                     "logId": "[unset]"
    //                 },
    //                 "level": "info"
    //             },
    //             {
    //                 "session_id": "session_v0_h9err5o70jf",
    //                 "client_timestamp_ms":  new Date().getTime(),
    //                 "event_name": "featureQuotaApiOk",
    //                 "event_message": "刷新功能配额成功",
    //                 "payload": {
    //                     "__location": "https://chat.deepseek.com/a/chat/s/" + chat_session_id,
    //                     "__ip": "165.225.62.217",
    //                     "__region": "US",
    //                     "__pageVisibility": "true",
    //                     "__nodeEnv": "production",
    //                     "__deployEnv": "production",
    //                     "__appVersion": "20241129.1",
    //                     "__commitId": "daf8e6ad",
    //                     "__userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    //                     "__referrer": "https://accounts.google.com/",
    //                     "thinkingQuota": "50",
    //                     "usedQuota": "0"
    //                 },
    //                 "level": "info"
    //             },
    //             {
    //                 "session_id": "session_v0_h9err5o70jf",
    //                 "client_timestamp_ms": new Date().getTime(),
    //                 "event_name": "__reportEventOk",
    //                 "event_message": "调用上报事件接口成功",
    //                 "payload": {
    //                     "__location": "https://chat.deepseek.com/a/chat/s/" + chat_session_id,
    //                     "__ip": "165.225.62.217",
    //                     "__region": "US",
    //                     "__pageVisibility": "true",
    //                     "__nodeEnv": "production",
    //                     "__deployEnv": "production",
    //                     "__appVersion": "20241129.1",
    //                     "__commitId": "daf8e6ad",
    //                     "__userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    //                     "__referrer": "https://accounts.google.com/",
    //                     "method": "post",
    //                     "url": "/api/v0/events",
    //                     "path": "/api/v0/events",
    //                     "logId": "[unset]",
    //                     "metricDuration": 2916,
    //                     "status": "200"
    //                 },
    //                 "level": "info"
    //             }
    //         ],
    //         "_nonce": "1169303568828.1533"
    //     }
    // });
    // console.log('======1', ss);
    // sk-e11be63ded82466ab80e315d2ae2a255

    const res = await request('https://chat.deepseek.com/api/v0/chat/create_pow_challenge', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer zl47Fp0OUsx6N38W2QXkY42yhArhCINN1sdE8YEa1vm0x6h+4VeiXMROE7JBFDkE',
        },
        // target_path: "/api/v0/file/upload_file"
        data: { target_path: "/api/v0/chat/completion" }
    });

    var {algorithm, answer, challenge, salt, signature, target_path, expire_at, difficulty} = res.data.biz_data.challenge;
    var mm = {algorithm, answer, challenge, salt, signature, target_path};


// window.btoa("Hello, world"); // encode 
    var pow = Buffer.from(JSON.stringify(mm)).toString('base64');  


    console.log(pow, '======', JSON.stringify(mm));

    const { instance } = await request('https://chat.deepseek.com/static/sha3_wasm_bg.7b9ca65ddd.wasm');
    console.log( algorithm, challenge, salt, expire_at, '++++++', instance);
    var c = instance.exports.__wbindgen_add_to_stack_pointer(-16);
    var f = challenge.length;
    var p = ("".concat(salt, "_").concat(expire_at, "_")).length;
    var n = difficulty;
    var s = instance.exports.__wbindgen_export_0(f, 1) >>> 0;
    var d = instance.exports.__wbindgen_export_0(p, 1) >>> 0;
    console.log('============', c, s, f, d, p, n);
    instance.exports.wasm_solve(c, s, f, d, p, n);
    console.log(c, '====', new DataView(instance.exports.memory.buffer).getInt32(c + 0, !0), new DataView(instance.exports.memory.buffer).getFloat64(c + 8, !0));
return;
    const response = await request('https://chat.deepseek.com/api/v0/chat/completion', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer zl47Fp0OUsx6N38W2QXkY42yhArhCINN1sdE8YEa1vm0x6h+4VeiXMROE7JBFDkE',
            'X-App-Version': '20241129.1',
            'Sec-Fetch-Dest': 'empty',
            'Pragma': 'no-cache',
            'Cache-Control':'no-cache',
            'Content-Length': 163,
            'Referer': 'https://chat.deepseek.com/a/chat/s/' + chat_session_id,
            'Sec-Ch-Ua-Platform': "macOS",
            'Sec-Fetch-Site': 'same-origin',
            // credentials: 'include', // Include cookies in the request 
            'Cookie': 'Hm_lvt_fb5acee01d9182aabb2b61eb816d24ff='+parseInt(new Date().getTime() / 1000)+'; Hm_lpvt_fb5acee01d9182aabb2b61eb816d24ff='+parseInt(new Date().getTime() / 1000)+'; HMACCOUNT=BF36AC72B95C6031; Hm_lvt_1fff341d7a963a4043e858ef0e19a17c='+parseInt(new Date().getTime() / 1000)+'; smidV2=20250113143640aaa39be9e26685ad48e8f058906c25960047c0b23235b1930; .thumbcache_6b2e5483f9d858d7c661c5e276b6a6ae=RQ4TQXSO1a0WzxS4nw27ezl/yNkvAAJzIRzWkX+Upuzw2OLWraorHBFLh2NDPPZ5s2Q93Cv1Px0izSRpLyMz7A%3D%3D; ds_session_id: d6388e2004f84233adae26ade423472a; ds_session_id=433a84fb06c040639a32ab721893506c; Hm_lpvt_1fff341d7a963a4043e858ef0e19a17c=1736750466; HWWAFSESID=d3476a6f4910eeac0d; HWWAFSESTIME=1736750465300; intercom-session-guh50jw4=NElLZnd5ME5Fa256ZDI3OFIrU3VFRWpZOVFRMFFURkRidXo3KzgzT2cxT2JzNWo2QWlxTnRYQzVQR21UdkRyMi0tZjlXeWJXekl3em1oVkRYR2xUTnQ0UT09--2033422fb051d22fd4e5c62680ebe9311db26d12; intercom-device-id-guh50jw4=c51f06af-d4eb-4da1-884c-372b96d7eaf6; __cf_bm=WoqYDHSycfxl4pCwJopjDmMBqf5BK3K4j.ClWX_GUW4-1736750994-1.0.1.1-mDtxrFaXeQs0c4_2lgfPWG6vA_L7WLNp0TEKZIxWc9S5gPCCXyZuGS6o0alJDngRDYO7xvpfy7ziCUE5E5OTQQ',
            'X-Ds-Pow-Response': pow
        },
        data: {
            chat_session_id,
            "parent_message_id": null,
            "prompt": "hello",
            "ref_file_ids": [],
            "thinking_enabled": false,
            "search_enabled": false
        }
    });
    console.log('response==', response);
}

deepseek();

// https://chat.deepseek.com/a/chat/s/d9f5f066-76aa-4c60-87ba-6e7b464041d8
// hash
// : 
// ""
// host
// : 
// "chat.deepseek.com"
// hostname
// : 
// "chat.deepseek.com"
// href
// : 
// "https://chat.deepseek.com/static/282.4966f1b77d.js"
// origin
// : 
// "https://chat.deepseek.com"
// password
// : 
// ""
// pathname
// : 
// "/static/282.4966f1b77d.js"
// port
// : 
// ""
// protocol
// : 
// "https:"
// search
// : 
// ""
// searchParams
// : 
// URLSearchParams {size: 0}
// username
// : 
// ""
