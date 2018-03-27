import { Request, Response } from 'express';

class homeController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.session.username;
        if (id === undefined) id = false;
        res.render('home', {id});
    }

    public post(req: Request, res: Response) {
        req.session.username = req.body.id;
        let id = req.session.username;

        // check if username already in db
        // if so, create different username
        
        res.render('home', {id});
    }
}

export default new homeController()