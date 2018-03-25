"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = require('../models/user.ts');
class taskController {
    constructor() { }
    ;
    get(req, res) {
        // Todo: Get correct task based on user progress
        res.redirect('/arb/1A.html');
    }
}
exports.default = new taskController();
//# sourceMappingURL=task.js.map