const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const CV = require("./models/cv");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => response.json("Root route for cv-builder."));

app.get("/cvs", async (request, response) => {
  const cvs = await CV.find(request.query);
  response.json(cvs);
});

app.post("/cvs", async (request, response) => {
  const newCV = await CV.create(request.body);
  response.json(newCV);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
