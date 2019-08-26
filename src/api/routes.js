const studentController = require("./controllers/StudentController");
const scheduleController = require("./controllers/ScheduleController");
const AttendanceController = require("./controllers/AttendanceController");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    app.route('/student')
        .get(studentController.getstudentinfo);

    app.route('/schedule')
        .get(scheduleController.get);

    app.route('/attendance')
        .get(AttendanceController.getAttendance);
};