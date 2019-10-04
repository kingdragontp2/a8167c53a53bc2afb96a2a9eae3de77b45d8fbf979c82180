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
            //classcode: 'CED-S-E10001-000-001',
            //lessonNumber: '5' 
        },
        headers:
        {
            Authorization: `Bearer ${accessToken}`
        },
        // formData:
        // {
        //     client_id: process.env.CLIENT_ID,
        //     redirect_uri: process.env.REDIRECT_URL,
        //     client_secret: process.env.CLIENT_SECRET
        // }
    };
    return request(options, (error, response, body) => {
        if (!error) {
            let result = JSON.parse(body)
            cb(result, null);
            console.log(body);
        } else {
            cb(null, error);
        }
    });
}
