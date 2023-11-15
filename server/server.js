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

// For OpanAI API
const OpenAI = require("openai");
const openai = new OpenAI();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.get("/", (_, response) => response.json("Root route for cv-builder."));

app.get("/cvs", async (request, response) => {
  const cvs = await CV.find(request.query);
  response.json(cvs);
});

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
//   const deletedCV = await CV.findByIdAndDelete(request.params.id);
//   response.json(deletedCV);
// });

// Query ChatGPT for job advice
const advice = async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant",
        role: "user",
        content:
          "List jobs I could do with these skills: data entry. Answer as a json array with the structure ['string']",
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { "type": "json_object" },
  });

  const test = completion.choices[0].message.content;
  console.log(test);
  console.log(test.jobs);
};
// test advice function
advice();

// Confirm port active
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
