const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb+srv://beonicus:Archery@01@cluster0.ofxbw5m.mongodb.net/myDatabase")

app.listen("5000", ()=>{
    console.log("Server is Running!")
})