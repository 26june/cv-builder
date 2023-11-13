const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const CV = require("./models/cv");
const Test = require("./models/test");
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

app.get("/test", async (request, response) => {
  const cvs = await Test.find(request.query);
  response.json(test);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
