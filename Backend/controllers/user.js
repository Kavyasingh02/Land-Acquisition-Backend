const User = require("../models/user.js");

// create user
module.exports.createUser = async (req, res) =>{
    const newUser = await User.create(req.body);
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