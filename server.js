const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose"); const connectDB = require("./config/database");
require('dotenv').config({ path: './config/.env' })

// Connect to database on server start
connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

