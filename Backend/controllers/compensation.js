const Compensation = require("../models/compensation.js");

// create compensation
module.exports.createCompensation = async (req, res) => {
    const newCompensation = await Compensation.create(req.body);

    res.json(newCompensation);
};

// get all compensation
module.exports.getAllCompensation = async (req, res) => {
    const compensations = await Compensation.find({})
        .populate("land");

    res.json(compensations);
};

// get one compensation
module.exports.getCompensation = async (req, res) => {
    const { id } = req.params;

    const compensation = await Compensation.findById(id)
        .populate("land");

    res.json(compensation);
};

// update compensation
module.exports.updateCompensation = async (req, res) => {
    const { id } = req.params;

    const updatedCompensation =
        await Compensation.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

    res.json(updatedCompensation);
};

// delete compensation
module.exports.deleteCompensation = async (req, res) => {
    const { id } = req.params;

    await Compensation.findByIdAndDelete(id);

    res.send("Compensation deleted successfully");
};