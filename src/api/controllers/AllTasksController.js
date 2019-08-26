import 'dotenv/config';
import { resolve } from 'url';
const request = require("request")
const generateToken = require("../student/generateToken");
const getAllTasks = require("../student/getAllTasks");
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

    }

}