const mongoose = require("mongoose");

// Use local MongoDB instead of Atlas
const mongoURI = "mongodb://localhost:27017/myLocalDatabase";

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB Connected Successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Connection Error:", error.message);
  }
}

connectDB();