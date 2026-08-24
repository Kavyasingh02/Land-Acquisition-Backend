const LandOwner = require("../models/landOwner.js");

// create
module.exports.createLandOwner = async (req, res) => {
    const newLandOwner = await LandOwner.create(req.body);

    res.json(newLandOwner);
};

// get all 
module.exports.getAllLandOwners = async (req, res) => {
    const landOwners = await LandOwner.find({});

    res.json(landOwners);
};

// get one land owner
module.exports.getLandOwner = async (req, res) => {
    const { id } = req.params;

    const landOwner = await LandOwner.findById(id);

    res.json(landOwner);
};

// update
module.exports.updateLandOwner = async (req, res) => {
    const { id } = req.params;
    const updatedLandOwner = await LandOwner.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );
    res.json(updatedLandOwner);
};

// delete land owner
module.exports.deleteLandOwner = async (req, res) => {
    const { id } = req.params;
    await LandOwner.findByIdAndDelete(id);
    res.send("Land owner deleted successfully");
};