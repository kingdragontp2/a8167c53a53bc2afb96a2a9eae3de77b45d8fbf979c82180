import 'dotenv/config';
const request = require("request")

module.exports = (accessToken, moduleCode, semesterCode, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo.rp.edu.sg/learningpath/api/modules',
        qs: { moduleCode: moduleCode, semesterCode: semesterCode },
        headers: {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate',
            Cookie: 'BIGipServerLMS-LAMS-PROD_new_pool=369630892.47873.0000',
            Host: 'myleo.rp.edu.sg',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            Authorization: `Bearer ${accessToken}`
        }
    };

    request(options, function(error, response, body) {
        if (!error) {
            let result = JSON.parse(body)
            cb(result, null);
        } else {
            cb(null, error);
        }
    });
}