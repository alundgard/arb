"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// Controllers
const home_1 = require("./controllers/home");
const instr_1 = require("./controllers/instr");
//
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    // Setup Config
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
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
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map