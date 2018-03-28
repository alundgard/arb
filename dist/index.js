"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
const server = app_1.default.listen(config_1.default.port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${config_1.default.port}`);
});
exports.default = server;
//# sourceMappingURL=index.js.map