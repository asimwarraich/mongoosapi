const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//api config
dotenv.config();
const app = express();
const port = process.env.port || 9000;
//midlawyer

app.use(cors());
app.use(express.json());

// db configer

//api endpoints
app.get("/", (req, res) => {
  res.json({ message: "welcome to the api" });
});
//listner
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
