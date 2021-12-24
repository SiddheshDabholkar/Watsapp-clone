const router = require("express").Router();
const GroupController = require("../controllers/Group");

router.post("/creategroup", GroupController.create);
router.delete("/deletegroup/:id", GroupController.delete);
router.put("/addUsersInGroup", GroupController.addUsers);
router.put("/removeUserInGroup/:Id/:groupId", GroupController.deleteUser);
router.put("/editGroup/:id", GroupController.edit);

module.exports = router;
