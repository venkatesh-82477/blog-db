const express = require("express");
const home = require("./Pages/Home")
const bolly = require("./Pages/Bollywood")
const tech = require("./Pages/Technology")
const holly = require("./Pages/Hollywood")
const fitness = require("./Pages/Fitness")
const food = require("./Pages/Food")
const article = require("./Pages/Article")
const app = express();
const cors = require("cors");


app.use(cors());
app.use("/", home);
app.use("/", bolly);
app.use("/", holly);
app.use("/", tech);
app.use("/", fitness);
app.use("/", food);
app.use("/", article);


app.listen(7000,function(){
    console.log("App is running at port : 7000");
})
