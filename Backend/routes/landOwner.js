const express = require("express");
const router = express.Router();

const {
    createLandOwner,
    getAllLandOwners,
    getLandOwner,
    updateLandOwner,
    deleteLandOwner
} = require("../controllers/landOwner.js");
const { authenticateUser } = require("../Middleware/auth.js");
const { authorizeRoles } = require("../Middleware/authorize.js");


router.post("/", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), createLandOwner);

router.get("/", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), getAllLandOwners);

router.get("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), getLandOwner);


router.put("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), updateLandOwner);


router.delete("/:id", authenticateUser, authorizeRoles("ADMIN"), deleteLandOwner);

module.exports = router;