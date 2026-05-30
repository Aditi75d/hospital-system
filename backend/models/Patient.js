const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    disease: String
});

module.exports = mongoose.model("Patient", PatientSchema);