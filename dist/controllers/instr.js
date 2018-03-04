"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instrController {
    constructor() { }
    ;
    get(req, res) {
        res.render('instr', {
            title: 'Instructions'
        });
    }
}
exports.default = new instrController();
//# sourceMappingURL=instr.js.map