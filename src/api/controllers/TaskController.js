const generateToken = require("../student/generateToken");
const getAllTasks = require("../student/getAllTasks");
const studentInfo = require("../student/studentInfo");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


module.exports = {
    getAll: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                let accessToken = result.access_token;
                let moduleId = 'c4125ca1-e321-e811-8104-00155d3c4051';
                getAllTasks(accessToken, moduleId, (result, err) => {
                    if (!err && result) res.json(result);
                });
            }
        });

    },

    getOne: (req, res) => {
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