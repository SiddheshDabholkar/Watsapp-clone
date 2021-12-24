const router = require("express").Router();
const GroupController = require("../controllers/Group");

router.post("/creategroup", GroupController.create);
router.post("/deletegroup", GroupController.delete);

module.exports = router;
