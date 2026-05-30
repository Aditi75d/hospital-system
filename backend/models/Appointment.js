const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patientName: String,
    doctor: String,
    date: String,
    time: String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);