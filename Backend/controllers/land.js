const Land = require("../models/land.js");

// create
module.exports.createLand = async (req, res) => {
    const newLand = await Land.create(req.body);
    res.json(newLand);
};

// get all land
module.exports.getAllLand = async (req, res) => {
    const { state, district, village, landType, status, project, surveyNumber } = req.query; 
    const filter = {}; 
    if (state) filter.state = state; 
    if (district) filter.district = district; if (village) filter.village = village;
     if (landType) filter.landType = landType; if (status) filter.status = status;
      if (project) filter.project = project; 
      if (surveyNumber) filter.surveyNumber = surveyNumber;
    const land = await Land.find({}).populate("project").populate("owner");
    res.json(land);
};

// get one land
module.exports.getLand = async (req, res) => {
    const { id } = req.params;
    const land = await Land.findById(id).populate("project").populate("owner");


    res.json(land);
};

// update
module.exports.updateLand = async (req, res) => {
    const { id } = req.params;
    const updatedLand = await Land.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    )
    res.json(updatedLand);
};

// update land status
module.exports.updateLandStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLand = await Land.findByIdAndUpdate(
        id,
        { status: status },
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