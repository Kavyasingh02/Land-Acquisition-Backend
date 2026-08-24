const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        state: {
            type: String,
            required: true
        },

        district: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: [
                "PROPOSED",
                "UNDER_ACQUISITION",
                "COMPLETED",
                "CANCELLED"
            ],
            default: "PROPOSED"
        }
    },
    {
        timestamps: true
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;