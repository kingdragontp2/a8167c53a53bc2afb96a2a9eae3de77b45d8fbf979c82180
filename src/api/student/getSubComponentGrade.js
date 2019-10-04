import 'dotenv/config';
var request = require("request");

module.exports = (accessToken, moduleId, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo-uat.rp.edu.sg/assessment/api/SubComponentGrade',
        qs: { moduleId: moduleId },
        headers: {
            Authorization: `Bearer ${accessToken}`
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