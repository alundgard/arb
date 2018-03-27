"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class homeController {
    constructor() { }
    ;
    get(req, res) {
        let id = req.session.username;
        if (id === undefined)
            id = false;
        res.render('home', { id });
    }
    post(req, res) {
        req.session.username = req.body.id;
        let id = req.session.username;
        // check if username already in db
        // if so, create different username
        res.render('home', { id });
    }
}
exports.default = new homeController();
//# sourceMappingURL=home.js.map