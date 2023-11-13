const mongoose = require("mongoose");
const CV = require("./models/cv");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const sampleCV = {
  name: "John Doe",
  email: "johndoe@xyz.com",
  phone: "0123456789",
  profile: "Experienced Web Developer",
  summary:
    "I am a reliable team player, I bring exceptional resourcefulness and a knack for creative problem-solving to the table.",
  skills: ["HTML", "JavaScript", "React.js", "Node.js", "MongoDB"],
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2025-01-01"),
      description: "Worked on various web projects using React and Node.js.",
    },
    {
      title: "Junior Software Developer",
      company: "Tech Corp",
      startDate: new Date("2019-01-01"),
      endDate: new Date("2019-12-12"),
      description: "Worked on various web projects using HTML and CSS.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of XYZ",
      graduationDate: new Date("2017-07-07"),
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "University of XYZ",
      graduationDate: new Date("2018-07-08"),
    },
  ],
  references: [
    {
      name: "Jane Smith",
      email: "jane@email.com",
      phone: "123-456-7890",
    },
    {
      name: "Tim Jezinho",
      email: "timjez@abc.com",
      phone: "113-446-7880",
    },
  ],
};

async function seed() {
  await CV.create(sampleCV);

  mongoose.disconnect();
}

seed();
