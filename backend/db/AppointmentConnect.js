const express = require("express");
const mongoose = require("mongoose");
const Appointment = require("../model/Appointment");
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// 1. Create a new appointment
app.post("/appointments", async (req, res) => {
  try {
    const newAppointment = new Appointment();
    newAppointment.appointmentId = req.body.appointmentId;
    newAppointment.patientName = req.body.patientName;
    newAppointment.phoneNumber = req.body.phoneNumber;
    newAppointment.hospitalId = req.body.hospitalId;
    newAppointment.doctorId = req.body.doctorId;
    newAppointment.departmentId = req.body.departmentId;
    newAppointment.appointmentDate = req.body.appointmentDate;
    newAppointment.status = req.body.status;

    const data = await newAppointment.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// 2. Get all appointments
app.get("/appointments", async (req, res) => {
  try {
    const data = await Appointment.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// 3. Get a specific appointment by ID
app.get("/appointments/:id", async (req, res) => {
  try {
    const data = await Appointment.findOne({appointmentId:req.params.id});
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ message: "Appointment not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// 4. Update an appointment by ID
app.put("/appointments/:id", async (req, res) => {
  try {
    const data = await Appointment.findOne({appointmentId:req.params.id});
    if (data) {
      data.appointmentId = req.body.appointmentId || data.appointmentId;
      data.patientName = req.body.patientName || data.patientName;
      data.phoneNumber = req.body.phoneNumber || data.phoneNumber;
      data.hospitalId = req.body.hospitalId || data.hospitalId;
      data.doctorId = req.body.doctorId || data.doctorId;
      data.departmentId = req.body.departmentId || data.departmentId;
      data.appointmentDate = req.body.appointmentDate || data.appointmentDate;
      data.status = req.body.status || data.status;

      const updatedData = await data.save();
      res.send(updatedData);
    } else {
      res.status(404).send({ message: "Appointment not found" });
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// 5. Delete an appointment by ID
app.delete("/appointments/:id", async (req, res) => {
  try {
    const data = await Appointment.deleteOne({appointmentId:req.params.id});
    if (data) {
      res.send({ message: "Appointment deleted successfully" });
    } else {
      res.status(404).send({ message: "Appointment not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
