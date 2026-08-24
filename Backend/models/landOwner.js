const mongoose = require("mongoose");

const landOwnerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        address: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const LandOwner = mongoose.model("LandOwner", landOwnerSchema);

module.exports = LandOwner;