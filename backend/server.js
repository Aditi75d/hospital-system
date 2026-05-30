const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/bills", require("./routes/billRoutes"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});