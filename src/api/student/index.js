const request = require('request');

class Student {
    constructor(config) {
        try {
            if (!config || config.access_token === undefined || config.token_type === undefined || config.expires_in === undefined || config.refresh_token=== undefined) {
                throw new Error("Unable to access tokens!");
            } else {
                this.access_token = config.access_token;
                this.token_type = config.token_type;
                this.expires_in = config.expires_in;
                this.refresh_token = config.refresh_token
            }
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Student;