import { Request, Response } from 'express';

let survey = require('../models/survey');

class surveyController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.query.id;
        if (id === undefined) id = 'undefined';
        res.render('home', { id: id });
    }

    public post(req: Request, res: Response) {
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

export default new surveyController()