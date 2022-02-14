const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Form", formsSchema);
