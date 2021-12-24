const router = require("express").Router();
const GroupController = require("../controllers/Group");

router.post("/creategroup", GroupController.create);
router.delete("/deletegroup", GroupController.delete);
router.put("/addusers", GroupController.addUsers);

module.exports = router;
