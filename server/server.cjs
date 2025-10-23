const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/expenditureDB");

// Define Schema & Model
const expenditureSchema = new mongoose.Schema({
  id: String, // Store UUID
  name: String,
  price: Number
});


const Expenditure = mongoose.model("Expenditure", expenditureSchema);

// API Routes
app.get("/expenditures", async (req, res) => {
  const expenditures = await Expenditure.find();
  res.json(expenditures);
});

app.post("/expenditures", async (req, res) => {
  // Remove previous data
  await Expenditure.deleteMany({});
  
  // Insert new filtered items
  await Expenditure.insertMany(req.body);
  
  res.json({ message: "Items updated successfully!" });
});

app.delete("/expenditures/:id", async (req, res) => {
  await Expenditure.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
