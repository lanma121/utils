import jwt from 'jsonwebtoken';  

const header = {  
    typ: "JWT",  
    alg: "HS256"  
};  

const payload = {  
    iat: 1731502599,  
    iss: "monica",  
    user_id: 25651602,  
    user_name: "Tyler",  
    jti: "fa2bed6779e842fcad19b81af2a5f22f",  
    client_type: "extension"  
};

export function base64Encode(str) {  
    return Buffer.from(str).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');  
} 

export const JWT = {
    // 签发JWT  
    HS256: (header, payload, secretKey) =>  jwt.sign(payload, secretKey, {  
        algorithm: "HS256",  
        header: header  
    }),
    // 验证JWT  
    verify: (token, secretKey, algorithms = ["HS256"]) => jwt.verify(token, secretKey, { algorithms }, (err, decoded) => {  
        if (err) {  
            console.error("Verify error:", err);  
        } else {  
            console.log("Decoded payload:", decoded);  
        }  
    })
};


console.log(base64Encode(JSON.stringify(payload)));