const express = require('express');
const path = require('path');
const connectDB = require("./config/db");
const logRoutes = require("./routes/logRoutes");
const bodyParser = require("body-parser");
const redis = require("redis");
const { customAlphabet } = require("nanoid");
const URL = require("./models/URL");



const app = express()
app.use(bodyParser.json());
connectDB();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routes
app.use("/api", logRoutes);

app.get('/', (req, res) => {
    res.render("index", {title: "URL SHORTENER"});
});


app.listen(PORT, () => {
    console.log("Running");
});