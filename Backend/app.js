const express = require("express");
const app = express();

require("dotenv").config();

const port = 8080;
const mongoose = require('mongoose');
const user = require("./models/user.js");
const userRouter = require("./routes/user.js");
const projectRouter = require("./routes/project.js");
const landRouter = require("./routes/land.js");
const landOwnerRouter = require("./routes/landOwner.js");
const documentRouter = require("./routes/document.js");
const compensationRouter = require("./routes/compensation.js");
const authRouter = require("./routes/auth.js");

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
app.use("/projects", projectRouter);
app.use("/land", landRouter);
app.use("/land-owners", landOwnerRouter);
app.use("/documents", documentRouter);
app.use("/compensation", compensationRouter);
app.use("/auth", authRouter);


app.listen(port, () => {
    console.log(`Server running on port-${port}`);
});