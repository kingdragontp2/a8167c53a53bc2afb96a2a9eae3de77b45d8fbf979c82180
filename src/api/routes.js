const scheduleController = require("./controllers/ScheduleController");
const studentController = require("./controllers/StudentController");
const cors = require('cors');

module.exports = (app) => {
    app.use(cors());
    
    app.route('/schedule')
        .get(scheduleController.get);
};