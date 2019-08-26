const generateToken = require("../student/generateToken");
const attendance = require("../student/Attendance");

module.exports = {
    getAttendance: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                let accessToken = result.access_token;
                let studentId = 'stu01';
                let startTime = '15/09/2017%2001:26:32';
                let endTime = '15/09/2020%2018:26:34';
                attendance(accessToken, studentId, startTime, endTime, (result, err) => {
                    if (!err && result) res.json(result);
                })
            }
        });
    }

}


