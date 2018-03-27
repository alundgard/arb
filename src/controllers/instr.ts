import { Request, Response } from 'express';

class instrController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.session.username;
        res.render('instr', {id});
    }
}

export default new instrController();