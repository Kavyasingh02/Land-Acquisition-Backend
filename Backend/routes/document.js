const express = require("express");
const router = express.Router();

const {
    createDocument,
    getAllDocuments,
    getDocument,
    updateDocument,
    deleteDocument
} = require("../controllers/document.js");

router.post("/", createDocument);

router.get("/", getAllDocuments);

router.get("/:id", getDocument);

router.put("/:id", updateDocument);

router.delete("/:id", deleteDocument);

module.exports = router;