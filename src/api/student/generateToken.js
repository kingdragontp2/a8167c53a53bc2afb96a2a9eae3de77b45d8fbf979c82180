import 'dotenv/config';
const request = require("request")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = (cb) => {
    const requestParams = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: process.env.AUTHOR_TYPE
    };
    return request({
        uri: process.env.TOKEN_ENDPOINT,
        method: 'POST',
        form: requestParams
    }, (error, response, body) => {
        if (!error) {
            let result = JSON.parse(body)
            cb(result, null);
        } else {
            cb(null, error);
        }
    });
}