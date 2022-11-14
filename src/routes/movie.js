const express = require("express")
const movieschema = require("../models/movie.js")

const router = express.Router()

//create movie
router.post("/movies", (req, res) => {
  const movie = movieschema(req.body)
  movie
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

// get all movie
router.get("/movies", (req, res) => {
  movieschema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

// get a movie
router.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  movieschema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

// update a movie
router.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { film_name, genre, date } = req.body;
  movieschema
  .updateOne( {_id: id}, { $set: {film_name, genre, date} })
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

// delete a movie
router.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  movieschema
  .remove( {_id: id})
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
})

module.exports = router