"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = express_1.Router();
// /* GET users listing. */
// router.get("/", function (req: Request, res: Response, next: NextFunction) {
//   res.send("respond with a resource");
// });
router.get('/', function (req, res, next) {
    res.send("fff");
});
module.exports = router;
//# sourceMappingURL=users.js.map