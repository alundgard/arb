import { Request, Response } from 'express';

class instrController {

    constructor() {};

    public get(req: Request, res: Response) {
        res.render('instr', {
            title: 'Instructions'
        });
    }
}

export default new instrController();