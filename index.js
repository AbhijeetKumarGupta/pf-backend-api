// Imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// App
const app = express();
app.use(cors());

// Connection Variables
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;
const OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// DB Connection
mongoose
  .connect(URI, OPTIONS)
  .then(() => {
    console.log("Connected To DB!");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema
const Projects = mongoose.model("projects", {});
const Certificates = mongoose.model("certificates", {});
const Skills = mongoose.model("skills", {});
const Companies = mongoose.model("companies", {});
const Others = mongoose.model("others", {});

// Endpoints
app.get("/", (req, res) => {
  res.send("Hello There!");
});
app.get("/projects", async (req, res) => {
  let data = await Projects.find();
  res.send(data);
});
app.get("/certificates", async (req, res) => {
  let data = await Certificates.find();
  res.send(data);
});
app.get("/skills", async (req, res) => {
  let data = await Skills.find();
  res.send(data);
});
app.get("/companies", async (req, res) => {
  let data = await Companies.find();
  res.send(data);
});
app.get("/others", async (req, res) => {
  let data = await Others.find();
  res.send(data);
});

// Start Listening
app.listen(PORT, () => {
  console.log("Server is listening at Port: " + PORT);
});
