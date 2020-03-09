const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const queryText = "SELECT * FROM movies";
  pool
    .query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log("cannot GET movies", err);
      res.sendStatus(500);
    });
}); //getting all movies from database

module.exports = router;
