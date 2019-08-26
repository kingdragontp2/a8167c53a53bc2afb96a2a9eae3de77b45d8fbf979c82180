const generateToken = require("../student/generateToken");
const getSchedule = require("../student/getSchedule");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    get: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                let accessToken = result.access_token;
                let studentId = 'stu01';
                let startTime = "02/09/2010%2000:00:00";
                let endTime = "06/09/2020%2000:00:00";

                getSchedule(accessToken, studentId, startTime, endTime, (result, err) => {
                    if (!err && result) res.json(result);
                })
            }
        });
    }
}


