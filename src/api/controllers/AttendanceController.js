const generateToken = require("../student/generateToken");
const attendance = require("../student/getAttendance");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    getAttendance: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                let accessToken = result.access_token;
                let studentId = '84155';
                let startTime = '01/01/2018 00:00:00';
                let endTime = '01/01/2020 00:00:00';
                attendance(accessToken, studentId, startTime, endTime, (result, err) => {
                    if (!err && result) res.json(result);
                })
            }
        });
    }

}