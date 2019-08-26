const scheduleController = require("./controllers/ScheduleController");
const AttendanceController = require("./controllers/AttendanceController");
const modulesController = require("./controllers/ModulesController");
const taskController = require("./controllers/TaskController");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());

    app.route('/schedule')
        .get(scheduleController.get);

    app.route('/modules')
        .get(modulesController.getModules);

    app.route('/attendance')
        .get(AttendanceController.getAttendance);

    app.route('/allTasks')
        .get(taskController.getAll);

    app.route('/task')
        .get(taskController.getOne);
};