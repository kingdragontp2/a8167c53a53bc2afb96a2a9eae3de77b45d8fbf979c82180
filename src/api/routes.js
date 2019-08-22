const studentControler = require("./controllers/StudentController");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    app.route('/student')
        .get(studentControler.getstudentinfo);

};