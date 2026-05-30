const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
    patientName: String,
    amount: Number
});

module.exports = mongoose.model("Bill", BillSchema);