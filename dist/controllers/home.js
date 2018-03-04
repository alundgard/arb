"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class homeController {
    constructor() { }
    ;
    get(req, res) {
        res.render('home', {
            title: 'Home Page Title'
        });
    }
    post(req, res) {
        const data = req.body;
        // query a database and save data
        res.status(200).send(data);
    }
}
exports.default = new homeController();
//# sourceMappingURL=home.js.map