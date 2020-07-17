const Router =require("koa-router")
const service = require ("../lib/mysql")
const controller = require("../controller/userController")

const router = new Router()

router.post("/login",controller.checkLogin)
router.post("/register",controller.registerUser)
module.exports = router