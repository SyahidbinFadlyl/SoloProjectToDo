const Login = require("../controllers/login");
const Register = require("../controllers/register");
const { authentication } = require("../middlewares/authentication");
const toDoList = require("./toDoList");
const router = require("express").Router();


router.post("/register", Register.register);
router.post("/login", Login.login);
router.use(authentication);
router.use("/to-doLists", toDoList)

module.exports = router;