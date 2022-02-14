const mongoose = require("mongoose");

const surveysSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Survey", surveysSchema);
