import 'dotenv/config';
const request = require("request")
const generateToken = require("../student/generateToken");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    getstudentinfo: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                var accessToken = result.access_token;
                var options = {
                    method: 'GET',
                    url: 'https://myleo-uat.rp.edu.sg/StudentLearningActivity/api/v1/tasks',
                    qs: { studentId: 'stu01' },
                    headers:
                    {
                        'cache-control': 'no-cache',
                        Connection: 'keep-alive',
                        'Content-Length': '449',
                        'Accept-Encoding': 'gzip, deflate',
                        Host: 'myleo-uat.rp.edu.sg',
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
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);
                    let result = JSON.parse(body);
                    res.json(result);
                });

            }
        });
    }

}


