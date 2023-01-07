"use strict";

var express = require("express");

var app = express();

var cors = require('cors');

app.use(cors());

var router = require("./Routes/ProductRoutes");

var loggingMiddelwares = require("./Middlewares/logging_middelware");

var mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.mongo_url).then(function (result) {
  return app.listen(3322, function () {
    return console.log("server is running on http://localhost:3322/");
  });
})["catch"](function (error) {
  return console.log(error);
});
app.use(express.urlencoded({
  extended: true
}));
app.use(loggingMiddelwares.loggignfUrl);
app.use(loggingMiddelwares.loggignParamas);
app.get("/", function (req, res) {
  res.send("<h2> Bienvneue dans notre app Express</h2>");
});
app.use("/products", router);