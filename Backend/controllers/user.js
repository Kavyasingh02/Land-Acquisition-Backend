const User = require("../models/user.js");
const bcrypt = require("bcryptjs");

// create user
module.exports.createUser = async (req, res) =>{
      const { name, email, password, role, state, district } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        state,
        district
    });

    res.json(newUser);
}

//get all user
module.exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
}

// get one user
module.exports.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
}

//update user
module.exports.updateUser = async (req, res) =>{
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );
    res.json(updatedUser);
}

//delete user
module.exports.deleteUser = async (req, res) =>{
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send("User deleted successfully");
}