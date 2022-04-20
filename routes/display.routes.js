/** @format */

const {
  display,
  shortUrl,
  click,
} = require("../controller/display.controller");
const router = require("express").Router();

router.get("/", display);
router.post("/shorturl", shortUrl);
router.get("/:urlid", click);

module.exports = router;
