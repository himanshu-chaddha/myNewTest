const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db");
const mongoose = require("mongoose");
var app = express();
app.use(cors());
app.use(bodyParser.json());
var port = 3000;

var schema = new mongoose.Schema({
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  //   imagePath: { type: String },
  gender: { type: String },
  address: { type: String },
  mobile: { type: Number }
});
// var Tank = mongoose.model("Tank", schema);

var employee = mongoose.model("Employee", schema);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/employee-add", (req, res) => {
  employee = new employee(req.body);
  employee
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//LOGIN//ADMIN

var schema = new mongoose.Schema({
  email: { type: String },
  password: { type: String }
});

var admin = mongoose.model("admin", schema);

app.get("/login", (req, res) => {
  admin.find({}, (err, data) => {
    res.send(data);
    console.log(data);
  });
});

//

app.listen(port, (req, res) => {
  console.log("server is running on port" + port);
});
