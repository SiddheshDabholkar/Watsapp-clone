const router = require("express").Router();
const GroupController = require("../controllers/Group");

router.post("/creategroup", GroupController.create);
router.delete("/deletegroup/:id", GroupController.delete);
router.put("/addusers", GroupController.addUsers);
router.put("/deleteUser/:Id/:groupId", GroupController.deleteUser);
router.put("/edit/:id", GroupController.edit);

module.exports = router;
