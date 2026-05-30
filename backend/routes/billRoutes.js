const express = require("express");
const router = express.Router();

const Bill = require("../models/Bill");

router.post("/", async (req, res) => {

    const bill = new Bill(req.body);

    await bill.save();

    res.json(bill);
});

router.get("/", async (req, res) => {

    const bills = await Bill.find();

    res.json(bills);
});

module.exports = router;