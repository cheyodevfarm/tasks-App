const { Router } = require("express");
const router = Router();
const { indexHome, indexAbout } = require("../controllers/index.controllers");
router.get("/", indexHome);

router.get("/about", indexAbout);
module.exports = router;
