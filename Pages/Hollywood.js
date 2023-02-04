const express = require("express");
const hollyapi = require("../Api/Hollywood")
const holly = express.Router();
holly.route("/hollywood").get(hollyapi.apiController)

module.exports = holly;
