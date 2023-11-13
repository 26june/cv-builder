const express = require("express");
const app = express();

const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

const CV = require("./models/cv");

app.use(express.json());
app.use(cors());

require("dotenv").config();

// put PORT in .env or use Localhost
const PORT = process.env.PORT || 8080;

app.get("/", (_, response) => response.json("Root route."));

// *** DATABASE ***

mongoose.connect(process.env.DATABASE_URL);

// Replace DATABASE_NAME with name of database

// CREATE new CV in database
app.post("/DATABASE_NAME", async (request, response) => {
  const newCV = await CV.create(request.body);
  response.json(newMovie);
});

// READ CV from database
app.get("/cvs", async (request, response) => {
  const cvs = await CV.find(request.query);
  response.json(cvs);
});

//READ selected CV from database
app.get("/DATABASE_NAME/:id", async (request, response) => {
  const selectedCV = await CV.findById(request.params.id);
  response.json(selectedCV);
});

// UPDATE CV in database
app.put("/DATABASE_NAME:id", async (request, response) => {
  const updatedCV = await CV.findByIdAndUpdate(request.params.id, request.body);
  response.json(updatedCV);
});

// DELETE CV from database
app.delete("/DATABASE_NAME/:id", async (request, response) => {
  const deletedCV = await Movie.findByIdAndDelete(request.params.id);
  response.json(deletedCV);
});

// *** APIs ***
// Put API variables in .env

// Confirm port active
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
