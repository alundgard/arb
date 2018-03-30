"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose"); // FIXME! require
// Controllers
const home_1 = require("./controllers/home");
const instr_1 = require("./controllers/instr");
const process_1 = require("./controllers/process");
const task_1 = require("./controllers/task");
const survey_1 = require("./controllers/survey");
// App
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.db();
    }
    // Setup Config
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.use(session({
            secret: 'this-is-a-secret-token',
            cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
        }));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
    }
    // Setup Routes
    routes() {
        const router = express.Router();
        // Home
        router.get('/', home_1.default.get);
        router.post('/', home_1.default.post);
        this.app.use('/', router);
        // Instr
        router.get('/instr', instr_1.default.get);
        this.app.use('/instr', router);
        // Process
        router.post('/process', process_1.default.post);
        this.app.use('/process', router);
        // Task
        router.get('/task', task_1.default.get);
        this.app.use('/task', router);
        // Survey
        router.post('/survey', survey_1.default.post);
        this.app.use('/process', router);
    }
    // Setup DB
    db() {
        let mongoDB = 'mongodb://127.0.0.1/arb_access';
        mongoose.connect(mongoDB);
        mongoose.Promise = global.Promise;
        let db = mongoose.connection;
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map