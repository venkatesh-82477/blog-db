const express = require("express");
const techapi = require("../Api/Technology")

const tech = express.Router();
tech.route("/technology").get(techapi.apiController)


module.exports = tech;

