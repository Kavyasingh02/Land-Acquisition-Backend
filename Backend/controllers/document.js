const Document = require("../models/document.js");

// create document
module.exports.createDocument = async (req, res) => {
    const newDocument = await Document.create(req.body);

    res.json(newDocument);
};

// get all documents
module.exports.getAllDocuments = async (req, res) => {
    const documents = await Document.find({})
        .populate("land");

    res.json(documents);
};

// get one document
module.exports.getDocument = async (req, res) => {
    const { id } = req.params;

    const document = await Document.findById(id)
        .populate("land");

    res.json(document);
};

// update document
module.exports.updateDocument = async (req, res) => {
    const { id } = req.params;

    const updatedDocument = await Document.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    res.json(updatedDocument);
};

// delete document
module.exports.deleteDocument = async (req, res) => {
    const { id } = req.params;

    await Document.findByIdAndDelete(id);

    res.send("Document deleted successfully");
};