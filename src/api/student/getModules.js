import 'dotenv/config';
const request = require("request")

module.exports = (accessToken, moduleCode, semesterCode, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo.rp.edu.sg/learningpath/api/modules',
        qs: { moduleCode: moduleCode, semesterCode: semesterCode },
        headers: {
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