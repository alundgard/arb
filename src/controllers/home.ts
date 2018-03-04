import { Request, Response } from 'express';

class homeController {

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
        // query a database and save data
        res.status(200).send(data);
    }

}

export default new homeController()