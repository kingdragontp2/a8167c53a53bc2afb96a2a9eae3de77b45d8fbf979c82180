import 'dotenv/config';
const generateToken = require("../student/generateToken");
const getModules = require("../student/getModules");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    getModules: (req, res) => {
        generateToken((result, err) => {
            if (!err && result) {
                let accessToken = result.access_token;
                let moduleCode = 'A101';
                let semesterCode = '9011';
                getModules(accessToken, moduleCode, semesterCode, (result, err) => {
                    if (!err && result) res.json(result);
                });
            }
        });
    }
}