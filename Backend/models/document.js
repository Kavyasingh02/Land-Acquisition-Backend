const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
    {
        land: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Land",
            required: true
        },

        name: {
            type: String,
            required: true
        },

        type: {
            type: String,
            enum: [
                "OWNERSHIP_DOCUMENT",
                "LAND_RECORD",
                "VERIFICATION_REPORT",
                "ACQUISITION_NOTICE",
                "OTHER"
            ],
            required: true
        },

        fileUrl: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;