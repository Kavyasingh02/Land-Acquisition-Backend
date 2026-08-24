const Land = require("../models/land.js");

// create
module.exports.createLand= async (req, res) => {
    const newLand = await Land.create(req.body);
    res.json(newLand);
};

// get all land
module.exports.getAllLand = async (req, res) => {
    const land= await Land.find({}).populate("project");
    res.json(land);
};

// get one land
module.exports.getLand = async (req, res) => {
    const { id } = req.params;
const land = await Land.findById(id);

    res.json(land);
};

// update
module.exports.updateLand= async (req, res) => {
    const { id } = req.params;

    const updatedLand = await Land.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    res.json(updatedLand);
};

// delete
module.exports.deleteLand = async (req, res) => {
    const { id } = req.params;
    await Land.findByIdAndDelete(id);
    res.send("Land deleted successfully");
};