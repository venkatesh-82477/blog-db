const express = require("express");
const fitapi = require("../Api/Fitness")
const fit = express.Router();
fit.route("/fitness").get(fitapi.apiController)

module.exports = fit;
