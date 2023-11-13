const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  profile: String,
  summary: String,
  skills: [String],
  experiences: [
    {
      title: String,
      company: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      graduationDate: Date,
    },
  ],
  references: [
    {
      name: String,
      email: String,
      phone: String,
    },
  ],
});

const CV = mongoose.model("CV", cvSchema);

module.exports = CV;
