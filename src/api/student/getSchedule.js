import 'dotenv/config';
const request = require("request")

module.exports = (accessToken, studentId, startTime, endTime, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo.rp.edu.sg/classManagement/api/classschedule',
        qs:
        {
            startTime: startTime,
            endTime: endTime,
            studentId: studentId
        },
        headers:
        {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Content-Length': '449',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'myleo.rp.edu.sg',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            Authorization: `Bearer ${accessToken}`
        },
        formData:
        {
            client_id: process.env.CLIENT_ID,
            redirect_uri: process.env.REDIRECT_URL,
            client_secret: process.env.CLIENT_SECRET
        }
    };

    return request(options, (error, response, body) => {
        if (!error) {
            let result = JSON.parse(body)
            cb(result, null);
        } else {
            cb(null, error);
        }
    });

}