const mongoose = require("mongoose");

// Use the same connection string as `mongosh`
// mongodb+srv://beonicus:Archery@01@cluster0.ofxbw5m.mongodb.net/?appName=mongosh+2.5.1
const mongoURI = "mongodb+srv://beonicus:Archery@01@cluster0.ofxbw5m.mongodb.net/myDatabase";

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