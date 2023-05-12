var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);

// Creating skill (2 steps)
router.get("/new", skillsCtrl.new);
router.post("/", skillsCtrl.create);

// Editing a skill (2 steps)
router.get("/:id/edit", skillsCtrl.edit);
router.put("/:id", skillsCtrl.update);

router.get("/:id", skillsCtrl.show);

router.delete("/:id", skillsCtrl.delete);

module.exports = router;
