const express = require('express');
const path = require('path');

var app = express();

const friends = require('../data/friends.js')
module.exports = (app)=>{
    app.get("/api/friends", function (req, res) {
        //sends friend res.JSON
        return res.json(friends);

    });
    app.post("/api/friends", function (req, res) {
        //reads friend JSON
        // req.body hosts is equal to the JSON post sent from the user take that data and add it to friends array
    });
    
    

}
