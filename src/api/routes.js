const studentController = require("./controllers/StudentController");
const scheduleController = require("./controllers/ScheduleController");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    app.route('/student')
        .get(studentController.getstudentinfo);

    app.route('/schedule')
        .get(scheduleController.get);
};