const mongoose = require("mongoose");

const landParcelSchema = new mongoose.Schema(
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

        ownerName: {
            type: String,
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

const LandParcel = mongoose.model("LandParcel", landParcelSchema);

module.exports = LandParcel;