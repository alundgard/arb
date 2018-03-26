"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 1234;
app_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on ${port}`);
});
exports.getConfig = () => console.log("Hello world!");
//# sourceMappingURL=index.js.map