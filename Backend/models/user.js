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
            "ADMIN",
            "FINANCE_OFFICER",
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