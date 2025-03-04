


import request from './request.mjs';


export async function wen() {
    const aa = await request('https://qianwen.biz.aliyun.com/dialog/conversation', {
        headers: {
            'Content-Type': 'application/json',
            "x-platform":"pc_tongyi",
            "x-xsrf-token": "96fddd77-7fd2-40bd-ae72-46b6b13c87e3",
            "cookie":"UM_distinctid=1943f763c6c4f2-0cfc2a645ae59a-1e525636-16a7f0-1943f763c6d5ae; tongyi_guest_ticket=UrwSWBI3msIQs8GoouTWRgM*OU3l3p5QkX7HhQKnkuLf2Ik3RaC3u6yQ5Qc2oDc8uU_yWEm8lc$W0; _samesite_flag_=true; cookie2=1fa7f48e7d3281eedd279e4accbeedbf; t=ce3805a8cb4da7b224c6ae2e2fd24760; _tb_token_=e35e55e33edeb; cna=U7gDIEgvrQQCAdJKlZvs8FYt; sca=b673b201; isg=BMzMmyGbx7wildOfHCZz7M18nSz-BXCvwd_e0SaN2HcasWy7ThVAP8KAUbGJ3KgH; acw_tc=1cc0a245-0293-9307-8ac0-f9839529947a27dc8350e745a5b43134eb8c0b4f0a46; tongyi_sso_ticket=VLhdmKBZ_CxSVWi9lIc05DKnsQ_bSAek1pfbGzzg_8yn1gsBH1opRO0qadzXjCc$oyPy1LlUwrTz0; cnaui=1739255129157629543; aui=1739255129157629543; atpsida=8dd98aa3b116c01588ae1a12_1739255139_3; tfstk=c3LhB34zTOwjqaNtsX_Ic76NUJwhalMOp9WW7A2KReRvAmY1Tsc4boJqgoXihvr5."
        },
        data: {
            "model": "",
            "action": "next",
            "mode": "chat",
            "userAction": "chat",
            "requestId": "4c28191b85ad4f8f868bb9686bb87d6b",
            "sessionId": "",
            "sessionType": "text_chat",
            "parentMsgId": "",
            "params": {
                "agentId": "",
                "searchType": "",
                "pptGenerate": false,
                "bizScene": "",
                "bizSceneInfo": {}
            },
            "contents": [
                {
                    "content": "菩提祖师",
                    "contentType": "text",
                    "role": "user",
                    "ext": {
                        "searchType": "",
                        "pptGenerate": false
                    }
                }
            ]
        }
    });

    console.log('====', aa);
}

wen(); 