const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  name: String,
});

const Test = mongoose.model("TEST", cvSchema);

module.exports = Test;
