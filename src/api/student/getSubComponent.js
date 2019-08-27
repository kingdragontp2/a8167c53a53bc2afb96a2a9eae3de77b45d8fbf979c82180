import 'dotenv/config';
var request = require("request");

module.exports = (accessToken, moduleId, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo-uat.rp.edu.sg/assessment/api/SubComponent',
        qs: { moduleId: moduleId },
        headers: {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'myleo-uat.rp.edu.sg',
            'Postman-Token': '2e5b9587-362b-4f2a-95db-a2e791dabc70,7a351e66-bef9-4c6f-b21f-a19ad047594a',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            'User-Agent': 'PostmanRuntime/7.15.2',
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    return request(options, function(error, response, body) {
        if (!error) {
            let result = JSON.parse(body);
            cb(result, null);
        } else {
            cb(null, error);
        }
    });
}