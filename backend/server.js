// server.js
const express = require("express");
require("dotenv").config(); //added
const cors = require('cors');
// routes
const todo = require("./routes/todo"); // added


const connectDB = require("./config/db"); //added


const app = express();

app.use(express.json())
app.use(cors({
    origin: '*'
}));// connect database
connectDB();//added

// use routes
app.use("/api/todo", todo); // added

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});