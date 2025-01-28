const express = require("express");
const mongoose = require("mongoose");
const Admit = require("../model/Admit");
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
const PORT = 3000;


// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => {
    console.log("Connected to MongoDB");
    // const total = 
    // console.log(Admit.estimatedDocumentCount());
})
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// 1. Create a new admission
app.post("/admits", async (req, res) => {
  try {
    const total = await Admit.countDocuments();
    const newAdmit = new Admit();
    newAdmit.admissionId = total+100;
    newAdmit.patientId = req.body.patientId;
    newAdmit.roomId = req.body.roomId;
    newAdmit.admissionDate = req.body.admissionDate;
    newAdmit.dischargeDate = req.body.dischargeDate;
    // const data1 = await Admit.findOne(newAdmit.roomId);
    const data = await newAdmit.save();
    res.status(201).send({
        message:"New Admit Successful",
        admit: data, total,
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// 2. Get all admissions
app.get("/admits", async (req, res) => {
  try {
    const data = await Admit.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// 3. Get a specific admission by ID
app.get("/admits/:id", async (req, res) => {
  try {
    const data = await Admit.findOne({admissionId:req.params.id});
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ message: "Admission not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// 4. Update an admission by ID
app.put("/admits/:id", async (req, res) => {
  try {
    const data = await Admit.findOne({admissionId:req.params.id});
    if (data) {
      data.admissionId = req.body.admissionId || data.admissionId;
      data.patientId = req.body.patientId || data.patientId;
      data.roomId = req.body.roomId || data.roomId;
      data.admissionDate = req.body.admissionDate || data.admissionDate;
      data.dischargeDate = req.body.dischargeDate || data.dischargeDate;

      const updatedData = await data.save();
      res.send(updatedData);
    } else {
      res.status(404).send({ message: "Admission not found" });
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// 5. Delete an admission by ID
app.delete("/admits/:id", async (req, res) => {
  try {
    const data = await Admit.deleteOne({admissionId:req.params.id});
    if (data) {
      res.send({ message: "Admission deleted successfully" });
    } else {
      res.status(404).send({ message: "Admission not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
