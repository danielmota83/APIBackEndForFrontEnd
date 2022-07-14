const router = require("express").Router();
const usersController = require("./users.controller");
const authMiddleware = require("../auth/auth.middleware")

router.post("/create", usersController.createUser)
router.get("/", authMiddleware, usersController.findAllUsers)

module.exports = router