import 'dotenv/config';
var request = require("request");

module.exports = (accessToken, moduleId, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo-uat.rp.edu.sg/StudentLearningActivity/api/v1/tasks',
        qs: { ModuleIds: moduleId },
        headers: {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'myleo-uat.rp.edu.sg',
            'Postman-Token': 'e9eb9170-a8bd-4dad-b4a9-3b22ce4f2f4f,316cb532-2ab8-49b2-a259-b5ae2c8d71c7',
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