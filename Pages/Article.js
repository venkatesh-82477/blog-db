const express = require("express");
const artapi = require("../Api/Article")
const article = express.Router();
article.route("/article").get(artapi.apiController)


module.exports = article;
