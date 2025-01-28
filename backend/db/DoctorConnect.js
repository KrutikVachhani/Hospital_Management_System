const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Doctor = require('../model/Doctor');
var cors = require('cors');


const PORT = 3000;



mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => {

    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

    app.post('/doctors', async (req, res) => {
      const doctor = new Doctor();
      doctor.doctorId=req.body.doctorId;
      doctor.name = req.body.name;
      doctor.specialization = req.body.specialization;
      doctor.hospitalId = req.body.hospitalId;
      doctor.departmentId = req.body.departmentId
      const savedDoctor = await doctor.save();
      res.send(savedDoctor);
  });
  
  // 2. Get all doctors
  app.get('/doctors', async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.json(doctors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // 3. Get a specific doctor by 
  app.get('/doctors/:id', async (req, res) => {
    try {
      const temp = req.params.id;
      const doctor = await Doctor.findById(temp);
      if (doctor) {
        res.json(doctor);
      } else {
        res.status(404).json({ message: 'Doctor not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // 4. Update a doctor by ID
  app.put('/doctors/:id', async (req, res) => {
    try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (updatedDoctor) {
        res.json(updatedDoctor);
      } else {
        res.status(404).json({ message: 'Doctor not found' });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // 5. Delete a doctor by ID
  app.delete('/doctors/:id', async (req, res) => {
    try {
      const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
      if (deletedDoctor) {
        res.json({ message: 'Doctor deleted successfully' });
      } else {
        res.status(404).json({ message: 'Doctor not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// CRUD Routes for Doctor 

// 1. Create a new doctor

