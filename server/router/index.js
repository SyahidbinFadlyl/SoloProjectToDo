const { authentication } = require("../middlewares/authentication");
const router = require("express").Router();


router.post("/register");
router.post("/login");
router.use(authentication);

module.exports = router;