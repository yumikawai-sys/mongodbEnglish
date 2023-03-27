const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Word", WordSchema);
