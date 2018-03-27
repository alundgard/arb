"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 1234;
const server = app_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map