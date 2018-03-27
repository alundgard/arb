import { Request, Response } from 'express';

let user = require('../models/task');

class taskController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.session.username;
        console.log("Task, Logged in as: ", id);
       
        // Todo: Get correct task based on user progress

        res.redirect('/arb/1C.html');
    }
}

export default new taskController();