import { Request, Response } from 'express';

class taskController {

    constructor() {};

    public get(req: Request, res: Response) {

        // Todo: Get correct task based on user progress

        res.redirect('/arb/1A.html');
    }
}

export default new taskController();