const express = require("express");
const app = express();

const port = 8080;
const mongoose = require('mongoose');
const user = require("./models/user.js");
const userRouter = require("./routes/user.js");

mongoose.connect('mongodb://127.0.0.1:27017/land-acquisition').then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });


app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.use("/users", userRouter)


app.listen(port, () => {
    console.log(`Server running on port-${port}`);
});