const express = require('express');
const path = require('path');
const connectDB = require("./config/db");
const logRoutes = require("./routes/logRoutes");

const app = express()
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routes
app.use("/api", logRoutes);

app.get('/', (req, res) => {
    res.render("index", {title: "URL SHORTENER"});
});


const PORT = process.env. PORT || 3000;

app.listen(PORT, () => {
    console.log("Running");
});