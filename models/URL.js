const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  shortCode: { type: String, unique: true, required: true },
  longURL: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expireAt: { type: Date },
  accessCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("URL", URLSchema);
