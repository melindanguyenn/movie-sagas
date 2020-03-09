const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
//sourcing routers
const movieRouter = require("../server/routes/movie.router");
const detailRouter = require("../server/routes/detail.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static("build"));

/** ---------- ROUTES ---------- **/
app.use("/api/home", movieRouter);
app.use("/api/details", detailRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function() {
  console.log("Listening on port: ", port);
});
