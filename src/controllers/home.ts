import { Request, Response } from 'express';

class homeController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.query.id;
        if (id === undefined) id = false;
        res.render('home', {
            id: id
        });
    }

    public post(req: Request, res: Response) {
        const data = req.body;

        // check if username already in db
        // if so, create different username

        let sessData = req.session;
        sessData.username = data.id;

        res.render('home', {
            id: data.id
        });
    }

}

export default new homeController()