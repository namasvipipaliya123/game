const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  period: Number,
  number: Number,
  size: String,
  color: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  type: String, // "30sec", "1min", "3min", or "5min"
});

module.exports = mongoose.model("Result", resultSchema);
