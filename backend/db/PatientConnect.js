const express=require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Patient = require('../model/Patient');
var cors = require('cors')


mongoose.connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
.then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());



    // app.get('/patient',async (req, res)=>{
    //     const data = await Patient.find();
    //     res.send(data);
    // })

    app.get("/patients", async (req, res) => {
          const patients = await Patient.find();
          res.status(200).json(patients);
        //   res.send(patients);
      });

      app.get("/patients/:id", async (req, res) => {
        try {
          const patient = await Patient.findById(req.params.id);
          if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
          }
          res.status(200).json(patient);
        } catch (error) {
          res.status(500).json({ message: "Error retrieving patient", error });
        }
      });

    //   app.post("/patients", async (req, res) => {
    //     try {
    //       const newPatient = new Patient(req.body);
    //       await newPatient.save();
    //       res.status(201).json({ message: "Patient created successfully", newPatient });
    //     } catch (error) {
    //       res.status(400).json({ message: "Error creating patient", error });
    //     }
    //   });

      app.post("/patients", async (req, res) => {
          const newPatient = new Patient();
          newPatient.patient_name=req.body.patient_name;
          newPatient.phone_number=req.body.phone_number;
          newPatient.hospital_name=req.body.hospital_name;
          newPatient.doctor_name=req.body.doctor_name;
          newPatient.department=req.body.department;
          newPatient.department_name=req.body.department_name;
          newPatient.date=req.body.date;
          const data = await newPatient.save();
          res.send(data);
      });

    //   app.put("/patients/:id", async (req, res) => {
    //     try {
    //       const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //       if (!updatedPatient) {
    //         return res.status(404).json({ message: "Patient not found" });
    //       }
    //       res.status(200).json({ message: "Patient updated successfully", updatedPatient });
    //     } catch (error) {
    //       res.status(400).json({ message: "Error updating patient", error });
    //     }
    //   });

    //   app.put("patients/:id", async (req, res)=>{
    //     const patient = await Patient.findById(req.params.id)
    //     patient.patient_name=req.body.patient_name;
    //     patient.phone_number=req.body.phone_number;
    //     patient.hospital_name=req.body.hospital_name;
    //     patient.doctor_name=req.body.doctor_name;
    //     patient.department=req.body.department;
    //     patient.department_name=req.body.department_name;
    //     patient.date=req.body.date;
    //     const data = await patient.save();
    //     res.send(patient);

    //   })

    app.put("/patients/:id", async (req, res) => {
        try {
          const patient = await Patient.findById(req.params.id);
          if (!patient) {
            return res.status(404).send({ message: "Patient not found" });
          }
      
          // Update fields only if they are provided in the request body
          if (req.body.patient_name) patient.patient_name = req.body.patient_name;
          if (req.body.phone_number) patient.phone_number = req.body.phone_number;
          if (req.body.hospital_name) patient.hospital_name = req.body.hospital_name;
          if (req.body.doctor_name) patient.doctor_name = req.body.doctor_name;
          if (req.body.department) patient.department = req.body.department;
          if (req.body.department_name) patient.department_name = req.body.department_name;
          if (req.body.date) patient.date = req.body.date;
      
          const updatedPatient = await patient.save();
          res.status(200).send(updatedPatient);
        } catch (error) {
          res.status(400).send({ message: "Error updating patient data", error });
        }
      });

    //   app.delete("/patients/:id", async (req, res) => {
    //     try {
    //       const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    //       if (!deletedPatient) {
    //         return res.status(404).json({ message: "Patient not found" });
    //       }
    //       res.status(200).json({ message: "Patient deleted successfully", deletedPatient });
    //     } catch (error) {
    //       res.status(500).json({ message: "Error deleting patient", error });
    //     }
    //   });

      app.delete("/patients/:id", async (req, res)=>{
        const data = await Patient.findByIdAndDelete(req.params.id);
        res.send(data);
      })

    app.listen(3000,()=>{
        console.log("Server Started");
    })
})