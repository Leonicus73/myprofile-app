const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://beonicus:Archery@01@cluster0.ofxbw5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Define Schema & Model
const expenditureSchema = new mongoose.Schema({
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
  const newExpenditure = new Expenditure(req.body);
  await newExpenditure.save();
  res.json(newExpenditure);
});

app.delete("/expenditures/:id", async (req, res) => {
  await Expenditure.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));