const express = require("express");
const router = express.Router();

const {
    createCompensation,
    getAllCompensation,
    getCompensation,
    updateCompensation,
    deleteCompensation
} = require("../controllers/compensation.js");

// Create
router.post("/", createCompensation);

// Get all
router.get("/", getAllCompensation);

// Get one
router.get("/:id", getCompensation);

// Update
router.put("/:id", updateCompensation);

// Delete
router.delete("/:id", deleteCompensation);

module.exports = router;