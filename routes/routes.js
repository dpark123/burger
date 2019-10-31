var express = require("express");
var db = require("../models/burger");
var app = express();


module.exports = function (app) {
   
    app.get('/', function (req, res) {
       
            res.render('index');


    })

}