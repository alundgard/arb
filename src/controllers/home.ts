import { Request, Response } from 'express';

class homeController {

    constructor() {};

    public get(req: Request, res: Response) {
        res.render('home', {
            title: 'Home Page Title'
        });
    }

    public post(req: Request, res: Response) {
        const data = req.body;
        // query a database and save data
        res.status(200).send(data);
    }

}

export default new homeController()