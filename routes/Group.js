const router = require("express").Router();
const GroupController = require("../controllers/Group");

router.post("/creategroup", GroupController.create);

module.exports = router;
