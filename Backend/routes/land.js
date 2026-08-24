const express = require("express");
const router = express.Router();

const {
    createLand,
    getAllLand,
    getLand,
    updateLand,
    deleteLand
} = require("../controllers/land.js");


router.post("/", createLand);

router.get("/", getAllLand);

router.get("/:id", getLand);
router.put("/:id", updateLand);


router.delete("/:id", deleteLand);

module.exports = router;