const mongoose = require("mongoose");

const compensationSchema = new mongoose.Schema(
    {
        land: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Land",
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: [
                "PENDING",
                "APPROVED",
                "PAID"
            ],
            default: "PENDING"
        },

        paymentDate: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const Compensation = mongoose.model(
    "Compensation",
    compensationSchema
);

module.exports = Compensation;