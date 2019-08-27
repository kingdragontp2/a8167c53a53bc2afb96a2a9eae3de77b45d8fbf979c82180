const getSubComponentGrade = require("../student/getSubComponentGrade");
const generateToken = require("../student/generateToken");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    getSCG: (req, res) => {
        generateToken((result, err) => {
            if (result && !err) {
                let accessToken = result.access_token;
                let moduleId = '5be1e097-1862-e711-80e2-00155db2798e';
                getSubComponentGrade(accessToken, moduleId, (result, err) => {
                    if (!err && result) res.json(result);
                })
            }
        });
    }
}