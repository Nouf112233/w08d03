const mongoose = require("mongoose");

const task = new mongoose.Schema({
  name:{type: String, required: true },
  isdeleted:{type: Boolean, default:false }

});

module.exports = mongoose.model("Task", task);