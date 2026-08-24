const express = require("express");
const router = express.Router();

const {
    createCompensation,
    getAllCompensation,
    getCompensation,
    updateCompensation,
    deleteCompensation
} = require("../controllers/compensation.js");

const { authenticateUser } = require("../Middleware/auth.js");

const { authorizeRoles } = require("../Middleware/authorize.js");

// Create
router.post("/", authenticateUser, authorizeRoles("ADMIN", "FINANCE_OFFICER"), createCompensation);

// Get all
router.get("/", authenticateUser, authorizeRoles("ADMIN", "FINANCE_OFFICER"), getAllCompensation);

// Get one
router.get("/:id", authenticateUser, authorizeRoles("ADMIN", "FINANCE_OFFICER"), getCompensation);

// Update
router.put("/:id", authenticateUser, authorizeRoles("ADMIN", "FINANCE_OFFICER"), updateCompensation);

// Delete
router.delete("/:id", authenticateUser, authorizeRoles("ADMIN"), deleteCompensation);

module.exports = router;