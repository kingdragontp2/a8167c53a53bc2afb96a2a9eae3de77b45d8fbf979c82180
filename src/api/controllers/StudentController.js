import 'dotenv/config';
const request = require("request")
const generateToken = require("../student/generateToken");
const studentInfo = require("../student/studentInfo");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    getstudentinfo: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                let accessToken = result.access_token;
                let studentId = 'stu01';
                studentInfo(accessToken, studentId, (result, err) => {
                    if (!err && result) res.json(result);
                })
            }
        });
    }

}


