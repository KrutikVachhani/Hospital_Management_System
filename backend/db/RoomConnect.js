const express = require("express");
const mongoose = require("mongoose");
const Room = require("../model/Room");
const bodyParser = require('body-parser');
var cors = require('cors');

const PORT = 3000;


// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());

        // 1. Create a new
app.post("/rooms", async (req, res) => {
    try {
      const newRoom = new Room();
      newRoom.roomId = req.body.roomId;
      newRoom.roomType = req.body.roomType;
      newRoom.availability = req.body.availability;
  
      const data = await newRoom.save();
      res.status(201).send(data);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  
  // 2. Get all rooms
  app.get("/rooms", async (req, res) => {
    try {
      const data = await Room.find();
      res.send(data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // 3. Get a specific room by ID
  app.get("/rooms/:id", async (req, res) => {
    try {
      const data = await Room.findOne({roomId:req.params.id});
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: "Room not found" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  
  // 4. Update a room by ID
  app.put("/rooms/:id", async (req, res) => {
    try {
      const data = await Room.findOne({roomId:req.params.id});
      if (data) {
        data.roomId = req.body.roomId || data.roomId;
        data.roomType = req.body.roomType || data.roomType;
        data.availability = req.body.availability || data.availability;
        // data.availability = req.body.availability !== undefined ? req.body.availability : data.availability;
  
        const updatedData = await data.save();
        res.send(updatedData);
      } else {
        res.status(404).send({ message: "Room not found" });
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  });
  
  // 5. Delete a room by ID
  app.delete("/rooms/:id", async (req, res) => {
    try {
      const data = await Room.deleteOne({roomId:req.params.id});
      if (data) {
        res.send({ message: "Room deleted successfully" });
      } else {
        res.status(404).send({ message: "Room not found" });
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

