import { Request, Response, NextFunction, Router } from "express";
let router = Router();


// /* GET users listing. */
// router.get("/", function (req: Request, res: Response, next: NextFunction) {
//   res.send("respond with a resource");
// });


router.get('/', function (req, res, next) {
  res.send("fff")
});

module.exports = router;
