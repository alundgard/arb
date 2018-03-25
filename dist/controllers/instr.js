"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instrController {
    constructor() { }
    ;
    get(req, res) {
        let username = req.session.username;
        console.log('username', username);
        res.render('instr', {
            title: 'Instructions'
        });
    }
}
exports.default = new instrController();
//# sourceMappingURL=instr.js.map