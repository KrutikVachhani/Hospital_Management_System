const express = require("express");
const mongoose = require("mongoose");
const Department = require("../model/Department");
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());


        // 1. Create a new department
app.post("/departments", async (req, res) => {
      const newDepartment = new Department();
      newDepartment.departmentId = req.body.departmentId;
      newDepartment.name = req.body.name;
  
      const data = await newDepartment.save();
      res.status(201).send(data);
    
  });
  
  // 2. Get all departments
  app.get("/departments", async (req, res) => {
    try {
      const data = await Department.find();
      res.send(data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // 3. Get a specific department by ID
  app.get("/departments/:id", async (req, res) => {
    try {
      const data = await Department.findOne({departmentId:req.params.id});
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "Department not found" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // 4. Update a department by ID
  app.put("/departments/:id", async (req, res) => {
    try {
      const data = await Department.findOne({departmentId:req.params.id});
      if (data) {
        data.departmentId = req.body.departmentId || data.departmentId;
        data.name = req.body.name || data.name;
  
        const updatedData = await data.save();
        res.send(updatedData);
      } else {
        res.status(404).send({ message: "Department not found" });
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  
  // 5. Delete a department by ID
  app.delete("/departments/:id", async (req, res) => {
    try {
      const data = await Department.deleteOne({departmentId:req.params.id});
      if (data) {
        res.send({ message: "Department deleted successfully" });
      } else {
        res.status(404).send({ message: "Department not found" });
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
  .catch((err) => console.error("Failed to connect to MongoDB:", err));


