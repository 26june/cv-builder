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

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));

// //READ selected CV from database
// app.get("/DATABASE_NAME/:id", async (request, response) => {
//   const selectedCV = await CV.findById(request.params.id);
//   response.json(selectedCV);
// });

// // UPDATE CV in database
// app.put("/DATABASE_NAME:id", async (request, response) => {
//   const updatedCV = await CV.findByIdAndUpdate(request.params.id, request.body);
//   response.json(updatedCV);
// });

// // DELETE CV from database
// app.delete("/DATABASE_NAME/:id", async (request, response) => {
//   const deletedCV = await Movie.findByIdAndDelete(request.params.id);
//   response.json(deletedCV);
// });

// Confirm port active
