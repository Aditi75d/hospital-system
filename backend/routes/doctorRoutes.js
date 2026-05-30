const express = require("express");
const router = express.Router();

const Doctor = require("../models/Doctor");

router.post("/", async (req, res) => {

    const doctor = new Doctor(req.body);

    await doctor.save();

    res.json(doctor);
});

router.get("/", async (req, res) => {

    const doctors = await Doctor.find();

    res.json(doctors);
});

module.exports = router;