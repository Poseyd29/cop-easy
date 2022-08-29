const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose"); const connectDB = require("./config/database");
require('dotenv').config({ path: './config/.env' })

// Connect to database on server start
connectDB()

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));