"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
let user = require('../models/task');
class taskController {
    constructor() { }
    ;
    get(req, res) {
        let id = req.session.username;
        console.log("Task, Logged in as: ", id);
        let next = req.query.next;
        console.log("Next task is: ", next);
        // Todo: Get correct task based on user progress
        res.redirect('/arb/' + next + '.html?ip=' + config_1.default.ip);
    }
}
exports.default = new taskController();
//# sourceMappingURL=task.js.map