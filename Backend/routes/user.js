const express = require("express");
const router = express.Router();

const { createUser,getAllUsers,getUser,updateUser,deleteUser} = require("../controllers/user.js");

const {
    authenticateUser
} = require("../Middleware/auth.js");


const {
    authorizeRoles
} = require("../Middleware/authorize.js");


router.get(
    "/admin-test",
    authenticateUser,
    authorizeRoles("ADMIN"),
    (req, res) => {

        res.json({
            message: "Welcome Admin"
        });

    }
);


router.post("/",  authenticateUser,
    authorizeRoles("ADMIN"),createUser);

router.get("/", authenticateUser,
    authorizeRoles("ADMIN"), getAllUsers);

router.get("/:id", authenticateUser,
    authorizeRoles("ADMIN"), getUser);

router.put("/:id", authenticateUser,
    authorizeRoles("ADMIN"), updateUser);

router.delete("/:id", authenticateUser,
    authorizeRoles("ADMIN"), deleteUser);

module.exports = router;