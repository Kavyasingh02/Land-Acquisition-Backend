const express = require("express");
const router = express.Router();
const { createProject , getAllProjects, getProject, updateProject,
deleteProject} = require("../controllers/project.js");

const { authenticateUser } = require("../Middleware/auth.js");
const { authorizeRoles } = require("../Middleware/authorize.js");

router.post("/", authenticateUser,
    authorizeRoles("ADMIN"), createProject);

router.get("/",  authenticateUser,
    authorizeRoles("ADMIN", "FIELD_OFFICER"), getAllProjects);

router.get("/:id",    authenticateUser,
    authorizeRoles("ADMIN", "FIELD_OFFICER"),getProject);

router.put("/:id",  authenticateUser,authorizeRoles("ADMIN"),updateProject);

router.delete("/:id",  authenticateUser,   authorizeRoles("ADMIN"),deleteProject);


module.exports = router;