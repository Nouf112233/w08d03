const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email:{type: String, required: true ,unique:true},
  password:{type: String, required: true },
  role: {type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
 
  

 
});

module.exports = mongoose.model("User", user);