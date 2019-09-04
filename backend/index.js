// ===================================MAKING CONNECTION ===========================================
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db");
// var conn = mongoose.createConnection("mongodb://127.0.0.1:27017/db1");
// var conn1 = mongoose.createConnection("mongodb://127.0.0.1:27017/db2");

var app = express();
app.use(cors());
app.use(bodyParser.json());
var port = 3000;
// ================================================================================================

// ====================================== USER MODEL===============================================
var userSchema = new mongoose.Schema({}, { strict: false });
var user = mongoose.model("user", userSchema);
// ---------------------------------------GET API FOR USER
app.get("/users", (req, res) => {
  user.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});
// ---------------------------------------POST API FOR USER
app.post("/user-add", (req, res) => {
  user = new user(req.body);
  user
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// =======================================EMPLOYEE MODEL=============================================

var empSchema = new mongoose.Schema({}, { strict: false });
var employee = mongoose.model("employee", empSchema);
// -------------------------------------GET API FOR USER
app.get("/employees", (req, res) => {
  employee.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});
// -------------------------------------POST API FOR EMPLOYEE
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

app.listen(port, (req, res) => {
  console.log("server is running on port" + port);
});

// ============================================LOGIN API================================================

var loginSchema = new mongoose.Schema({}, { strict: false });
var admin = mongoose.model("admin", loginSchema);

// ---------------------------------------GET API FOR LOGIN
app.get("/login", (req, res) => {
  admin.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});
