const router = require("express").Router();
const UserController = require("../controllers/User");

router.post("/login", UserController);

module.exports = router;
