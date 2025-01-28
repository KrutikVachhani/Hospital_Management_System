const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Hospital = require("../model/Hospital");
var cors = require('cors');

const PORT = 3000;


mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(express.json());
    app.use(cors());

    // 1. Create a new hospital
app.post("/hospitals", async (req, res) => {
    try {
      const newHospital = new Hospital();
      newHospital.hospitalId = req.body.hospitalId;
      newHospital.name = req.body.name;
      newHospital.address = req.body.address;
      newHospital.phone = req.body.phone;
  
      const data = await newHospital.save();
      res.status(201).send(data);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  
  // 2. Get all hospitals
  app.get("/hospitals", async (req, res) => {
    try {
      const data = await Hospital.find();
      res.send(data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // 3. Get a specific hospital by ID
  app.get("/hospitals/:id", async (req, res) => {
    try {
      const data = await Hospital.findOne({hospitalId:req.params.id});
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "Hospital not found" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // 4. Update a hospital by ID
  app.put("/hospitals/:id", async (req, res) => {
    try {
      const data = await Hospital.findById(req.params.id);
      if (data) {
        data.hospitalId = req.body.hospitalId || data.hospitalId;
        data.name = req.body.name || data.name;
        data.address = req.body.address || data.address;
        data.phone = req.body.phone || data.phone;
  
        const updatedData = await data.save();
        res.send(updatedData);
      } else {
        res.status(404).send({ message: "Hospital not found" });
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  
  // 5. Delete a hospital by ID
  app.delete("/hospitals/:id", async (req, res) => {
    try {
      const data = await Hospital.findByIdAndDelete(req.params.id);
      if (data) {
        res.send({ message: "Hospital deleted successfully" });
      } else {
        res.status(404).send({ message: "Hospital not found" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
  })

