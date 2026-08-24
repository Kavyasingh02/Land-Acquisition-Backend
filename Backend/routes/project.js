const express = require("express");
const router = express.Router();
const { createProject , getAllProjects, getProject, updateProject,
deleteProject} = require("../controllers/project.js");

router.post("/", createProject);

router.get("/", getAllProjects);
router.get("/:id", getProject);
router.put("/:id", updateProject);

router.delete("/:id", deleteProject);


module.exports = router;