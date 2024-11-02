import request from "./request.mjs";

export const dictionary = {
    bing: (word, language = 'cn') => `https://www.bing.com/dict/search?q=${word}&cc=${language}`,

};

export const translator = {
    edge: {
        url: 'https://api-edge.cognitive.microsofttranslator.com/translate?from=&to=zh-Hans&api-version=3.0',
        method: 'POST',
        headers: { "Content-Type": "application/json" }
    },
    googlet: () => {
        return {
            // https://translate.googleapis.com/translate_a/t?anno=3&client=te&format=html&v=1.0&key&logld=vTE_20240320&sl=en&tl=zh-CN&tc=0&tk=572971.1048196
            url: 'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?rpcids=AVdN8&source-path=%2F&f.sid=-531554306794997781&bl=boq_translate-webserver_20240312.05_p0&hl=en&soc-app=1&soc-platform=1&soc-device=1&_reqid=379387&rt=c',
        }
    },//https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=Hello
    google: (value) => `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${
        encodeURI(value,)
    }`,
    // bing: {
    //     url: 'https://www.bing.com/ttranslatev3?&IG=E2680977B73848FA8BC5252FFEBF9700&IID=SERP.5626',
    //     data: {
    //         fromLang: 'en',
    //         to: 'zh-Hans',
    //         token: 'XtZFvL8c9N2oHiFYwKR9e_ymeayhNp16',
    //         key: '1710859737886',
    //         text: 'hi everyone',
    //         tryFetchingGenderDebiasedTranslations: true
    //     }
    // }
}

export const edge = async (Text, failed_time = 0) => {
    try {
        if (!translator.edge.headers.authorization) {
            console.log('authorization is invalid');
            throw new Error('authorization is invalid');
        }
        const response = await request({
            ...translator.edge, 
            data: [{ Text }]
        });
        return response;
    } catch (error) {
        const token = await request('https://edge.microsoft.com/translate/auth');
        translator.edge.headers.authorization = 'Bearer ' + token;
        if (failed_time > 2) {
            throw new Error('exceed failed time');
        }
        return edge(Text, ++failed_time);
    }
}
