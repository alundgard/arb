import { Request, Response } from 'express';

class instrController {

    constructor() {};

    public get(req: Request, res: Response) {
        
        let username = req.session.username;
        console.log('username', username);

        res.render('instr', {
            title: 'Instructions'
        });
    }
}

export default new instrController();