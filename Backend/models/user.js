const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        enum: [
            "SUPER_ADMIN",
            "CENTRAL_MINISTRY",
            "STATE_AUTHORITY",
            "DISTRICT_AUTHORITY",
            "PROJECT_AGENCY",
            "FIELD_OFFICER"
        ]
    },

    state: {
        type: String
    },

    district: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;