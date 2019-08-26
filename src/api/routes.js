const studentController = require("./controllers/StudentController");
const scheduleController = require("./controllers/ScheduleController");
const allTasksController = require("./controllers/AllTasksController");
const studentModulesList = require("./controllers/StudentModulesList");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    app.route('/student')
        .get(studentController.getStudentInfo);

    app.route('/schedule')
        .get(scheduleController.get);

    app.route('/allTasks').get(allTasksController.getAll);
    app.route('/modulesList').get(studentModulesList.get);
};