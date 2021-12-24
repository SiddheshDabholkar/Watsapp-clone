const router = require("express").Router();
const UserController = require("../controllers/User");

router.post("/login", UserController.login);
router.post("/editUser/:id", UserController.edit);

module.exports = router;
