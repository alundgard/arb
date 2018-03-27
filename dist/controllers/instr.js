"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instrController {
    constructor() { }
    ;
    get(req, res) {
        let username = req.session.username;
        console.log('req.session.username', req.session.username);
        res.render('instr');
    }
}
exports.default = new instrController();
//# sourceMappingURL=instr.js.map