"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let survey = require('../models/survey');
class surveyController {
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
        let next = req.query.next;
        data.username = req.session.username;
        console.log(data);
        // query a database and save data
        let DB_Proc = new survey(data);
        DB_Proc.save();
        // res.status(200).send(data);
        res.redirect('/task/?next=_done');
    }
}
exports.default = new surveyController();
//# sourceMappingURL=survey.js.map