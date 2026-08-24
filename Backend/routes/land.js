const express = require("express");
const router = express.Router();

const {
    createLand,
    getAllLand,
    getLand,
    updateLand, updateLandStatus,
    deleteLand
} = require("../controllers/land.js");

const { authenticateUser } = require("../Middleware/auth.js");
const { authorizeRoles } = require("../Middleware/authorize.js");


router.post("/", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), createLand);

router.get("/", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), getAllLand);

router.get("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), getLand);

router.put("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), updateLand);

router.patch("/:id/status", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), updateLandStatus);


router.delete("/:id", authenticateUser, authorizeRoles("ADMIN"), deleteLand);

module.exports = router;