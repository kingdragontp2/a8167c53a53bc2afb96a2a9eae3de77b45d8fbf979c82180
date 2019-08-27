const scheduleController = require("./controllers/ScheduleController");
const attendanceController = require("./controllers/AttendanceController");
const modulesController = require("./controllers/ModulesController");
const taskController = require("./controllers/TaskController");
const subComponentController = require("./controllers/SubComponentController");
const subComponentGradeController = require("./controllers/SubComponentGradeController");

const cors = require('cors');

module.exports = (app) => {
    app.use(cors());

    app.route('/schedule')
        .get(scheduleController.get);

    app.route('/modules')
        .get(modulesController.getModules);

    app.route('/attendance')
        .get(attendanceController.getAttendance);

    app.route('/allTasks')
        .get(taskController.getAll);

    app.route('/task')
        .get(taskController.getOne);


    app.route('/subComponent')
        .get(subComponentController.getSC);

    app.route('/subComponentGrade')
        .get(subComponentGradeController.getSCG);

};