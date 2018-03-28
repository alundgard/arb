"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instrController {
    constructor() { }
    ;
    get(req, res) {
        let id = req.session.username;
        res.render('instr', { id });
    }
}
exports.default = new instrController();
//# sourceMappingURL=instr.js.map