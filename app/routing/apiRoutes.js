const express = require('express');
const path = require('path');

var app = express();
module.exports = (app)=>{
    app.get("/api/friends", function (req, res) {
        //sends friend res.JSON
    });
    app.post("/api/friends", function (req, res) {
        //sends friend JSON
    });
    
    

}
