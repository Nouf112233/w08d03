const mongoose = require("mongoose");
require("dotenv").config();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.DB, options).then(
  () => {
    console.log("DB READY TO USE");
  },
  (err) => {
    console.log(err);
  }
);