var mongoose = require("../dbConnection.js");

var mySchema = new mongoose.Schema(
  {
    count: Number
  },
  {
    strict: false
  }
);

module.exports = mongoose.model("UserCount", mySchema, "User_Count");
