const express = require("express");
const router = express.Router();

const {
    createLand,
    getAllLand,
    getLand,
    updateLand,updateLandStatus,
    deleteLand
} = require("../controllers/land.js");


router.post("/", createLand);

router.get("/", getAllLand);

router.get("/:id", getLand);
router.put("/:id", updateLand);
router.patch("/:id/status", updateLandStatus);


router.delete("/:id", deleteLand);

module.exports = router;