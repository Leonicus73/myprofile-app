const mongoose = require("mongoose");

// MongoDB Connection String (Replace with your actual credentials)
const mongoURI = "mongodb+srv://beonicus:Archery@01@cluster0.ofxbw5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected Successfully!");
    mongoose.connection.close(); // Close connection after testing
  } catch (error) {
    console.error("❌ Connection Error:", error.message);
  }
}

connectDB();