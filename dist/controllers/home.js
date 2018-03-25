"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class homeController {
    constructor() { }
    ;
    get(req, res) {
        let id = req.query.id;
        if (id === undefined)
            id = false;
        res.render('home', {
            id: id
        });
    }
    post(req, res) {
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
exports.default = new homeController();
//# sourceMappingURL=home.js.map