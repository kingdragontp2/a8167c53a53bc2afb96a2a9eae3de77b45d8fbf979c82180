import 'dotenv/config';
const request = require("request");

module.exports = (accessToken, studentId, startTime, endTime, cb) => {
    var options = {
        method: 'GET',
        url: 'https://myleo-uat.rp.edu.sg/classManagement/api/attendance',
        qs:
        {
            startTime: startTime,
            endTime: endTime,
            studentId: studentId,
            //filter
            // classcode: 'G902-2R3R4W-E23E-DDC',
            // lessonNumber: '1' 
        },
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
    return request(options, (error, response, body) => {
        if (!error) {
            let result = JSON.parse(body)
            cb(result, null);
        } else {
            cb(null, error);
        }
    });
}
