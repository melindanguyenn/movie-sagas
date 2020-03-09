const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//using selected id from params to show movie details
router.get("/:id", (req, res) => {
  let id = req.params.id;
  const queryText =
    'SELECT "movies"."id", "movies"."title", "movies"."description", "genres"."name"  FROM "genres" JOIN "movie_genres" ON "movie_genres"."genres_id" = "genres"."id" JOIN "movies" ON "movie_genres"."movies_id" = "movies"."id" WHERE "movies"."id" = $1';
  pool
    .query(queryText, [id])
    .then(results => {
      res.send(results.rows);
    })
    .catch(err => {
      console.log("cannot GET movie details", err);
      res.sendStatus(500);
    });
});

//updating movie details from selected id
router.put("/", (req, res) => {
  let updateMovie = req.body;
  let values = [updateMovie.title, updateMovie.description, updateMovie.id];
  let queryText = `UPDATE "movies" SET "title" = ($1), 
  "description" = ($2) WHERE "id" = ($3)`;
  pool
    .query(queryText, values)
    .then(results => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("in put", error);
      res.sendStatus(500);
    });
});

module.exports = router;
