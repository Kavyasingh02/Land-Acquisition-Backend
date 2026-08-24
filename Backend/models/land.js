const mongoose = require("mongoose");

const landSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        surveyNumber: {
            type: String,
            required: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LandOwner",
            required: true
        },

        area: {
            type: Number,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        district: {
            type: String,
            required: true
        },

        village: {
            type: String,
            required: true
        },

        landType: {
            type: String,
            enum: [
                "AGRICULTURAL",
                "RESIDENTIAL",
                "COMMERCIAL",
                "INDUSTRIAL"
            ],
            required: true
        },

        status: {
            type: String,
            enum: [
                "IDENTIFIED",
                "UNDER_VERIFICATION",
                "NOTIFIED",
                "UNDER_REVIEW",
                "APPROVED",
                "COMPENSATION_PENDING",
                "COMPENSATION_PAID",
                "POSSESSION_TAKEN",
                "ACQUIRED"
            ],
            default: "IDENTIFIED"
        }
    },
    {
        timestamps: true
    }
);

const Land = mongoose.model("Land", landSchema);

module.exports = Land;