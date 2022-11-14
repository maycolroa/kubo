const mongoose = require("mongoose")

const userschema = mongoose.Schema(
  {
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("user", userschema)