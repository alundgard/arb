"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = require('../models/task');
class taskController {
    constructor() { }
    ;
    get(req, res) {
        console.log('task username', req.session.username);
        // Todo: Get correct task based on user progress
        let data = req.body;
        res.redirect('/arb/1C.html');
    }
}
exports.default = new taskController();
//# sourceMappingURL=task.js.map