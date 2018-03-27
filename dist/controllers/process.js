"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let process = require('../models/process');
class processController {
    constructor() { }
    ;
    get(req, res) {
        let id = req.query.id;
        if (id === undefined)
            id = 'undefined';
        res.render('home', { id: id });
    }
    post(req, res) {
        let data = req.body;
        data.username = req.session.username;
        console.log(data);
        // query a database and save data
        let DB_Proc = new process(data);
        DB_Proc.save();
        // res.status(200).send(data);
        res.redirect('/task'); // go to next task
    }
}
exports.default = new processController();
//# sourceMappingURL=process.js.map