const express = require("express");
const router = express.Router();

const {
    createLandOwner,
    getAllLandOwners,
    getLandOwner,
    updateLandOwner,
    deleteLandOwner
} = require("../controllers/landOwner.js");


router.post("/", createLandOwner);

router.get("/", getAllLandOwners);
router.get("/:id", getLandOwner);


router.put("/:id", updateLandOwner);


router.delete("/:id", deleteLandOwner);

module.exports = router;