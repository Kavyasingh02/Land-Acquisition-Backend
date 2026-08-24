const express = require("express");
const router = express.Router();

const {
    createDocument,
    getAllDocuments,
    getDocument,
    updateDocument,
    deleteDocument
} = require("../controllers/document.js");

const { authenticateUser } = require("../Middleware/auth.js");

const { authorizeRoles } = require("../Middleware/authorize.js");

router.post("/", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), createDocument);

router.get("/", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), getAllDocuments);

router.get("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), getDocument);

router.put("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), updateDocument);

router.delete("/:id", authenticateUser, authorizeRoles("ADMIN", "FIELD_OFFICER"), deleteDocument);

module.exports = router;