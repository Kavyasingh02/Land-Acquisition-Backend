const Project = require("../models/projects.js");

//create project
module.exports.createProject = async (req, res) => {
    const newProject = await Project.create(req.body);
    res.json(newProject);
};

//get all projects
module.exports.getAllProjects = async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
};

//get one projects
module.exports.getProject = async (req, res) =>{
    const { id } = req.params;
    const project = await Project.findById(id);
    res.json(project);
};

//update
module.exports.updateProject = async (req, res) => {
const { id } = req.params;
const updatedProject = await Project.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
);
res.json(updatedProject);
};


//delete
module.exports.deleteProject = async (req, res) => {
const { id } = req.params;

await Project.findByIdAndDelete(id);

res.send("Project deleted successfully");

};

