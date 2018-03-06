import { Request, Response } from 'express';

var process = require('../models/db.ts');

class processController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.query.id;
        if (id === undefined) id = 'undefined';
        res.render('home', {
            id: id
        });
    }

    public post(req: Request, res: Response) {
        const data = req.body;
        console.log(data);

        // query a database and save data
        let DB_Proc = new process(data);
        DB_Proc.save();

        res.status(200).send(data);
    }

}

export default new processController()