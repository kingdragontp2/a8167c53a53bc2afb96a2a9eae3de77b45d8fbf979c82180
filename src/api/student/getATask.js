import 'dotenv/config';
const request = require("request")

module.exports = (accessToken, studentId, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo-uat.rp.edu.sg/StudentLearningActivity/api/v1/tasks',
        qs: { studentId: studentId },
        headers:
        {
            Authorization: `Bearer ${accessToken}`
        },
        formData:
        {
            client_id: process.env.CLIENT_ID,
            redirect_uri: process.env.REDIRECT_URL,
            client_secret: process.env.CLIENT_SECRET
        }
    };
    return request(options, function (error, response, body) {
        if (!error) {
            let result = JSON.parse(body)
            cb(result, null);
        } else {
            cb(null, error);
        }
    });
}