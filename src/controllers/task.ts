import { Request, Response } from 'express';

let user = require('../models/task.ts');

class taskController {

    constructor() {};

    public get(req: Request, res: Response) {

        console.log('task username',req.session.username);

        // Todo: Get correct task based on user progress
        let data = req.body;

        console.log('data', data);

        res.redirect('/arb/1C.html');
    }
}

export default new taskController();