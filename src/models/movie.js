const mongoose = require("mongoose")

const userschema = mongoose.Schema(
  {
  film_name: {
    type: String,
    require: true
  },
  genre: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("movie", userschema)