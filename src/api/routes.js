const studentController = require("./controllers/StudentController");
const scheduleController = require("./controllers/ScheduleController");
const AttendanceController = require("./controllers/AttendanceController");
const modulesController = require("./controllers/ModulesController");
const allTasksController = require("./controllers/AllTasksController");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    app.route('/student')
        .get(studentController.getStudentInfo);

    app.route('/schedule')
        .get(scheduleController.get);

    app.route('/modules')
        .get(modulesController.getModules);

    app.route('/attendance')
        .get(AttendanceController.getAttendance);
    app.route('/allTasks').get(allTasksController.getAll);
};