const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const userRouter = require("./routes/user.js")
const movieRouter = require("./routes/movie.js")

const app = express()
// is used so that when adding the host of the connection or the port that we place
const PORT = process.env.PORT || 9000

// middleware
app.use(express.json())
app.use("/api", userRouter)
app.use("/api", movieRouter)


// routes 
app.get("/", (req, res) => {
  res.send("hola")
})

// mongoDB. conneccion
mongoose.connect(process.env.MONGODB_URI_1)
.then(() => console.log("connected mongoDB"))
.catch((error) => console.error(error))

// message on which port to connect
app.listen(PORT, () => {
    console.log("server runing on port: ", PORT)
})