const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/POC", err => {
  if (!err) {
    console.log("connection successful");
  } else {
    console.log("error in connection");
  }
});
module.exports = mongoose;
