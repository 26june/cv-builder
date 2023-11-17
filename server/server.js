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

//For OpanAI API
const OpenAI = require("openai");
const openai = new OpenAI();
const bodyParser = require("body-parser");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.get("/", (_, response) => response.json("Root route for cv-builder."));

app.get("/cvs", async (request, response) => {
  const cvs = await CV.find(request.query);
  response.json(cvs);
});

<<<<<<< HEAD
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
app.use(bodyParser.json());
app.post("/advice", async (req, res) => {
  console.log(req.body);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant",
        role: "user",
        content: `Suggest jobs I could do with these skills: ${req.body}.`,
      },
    ],
    model: "gpt-3.5-turbo-1106",
  });

  const advice = completion.choices[0].message.content;
  console.log(advice);
  res.json(advice);
});

// Confirm port active
=======
app.post("/cvs", async (request, response) => {
  const newCV = await CV.create(request.body);
  response.json(newCV);
});

>>>>>>> 8cf0b2f964ab88151804ecfba7a2f728eae5c910
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
