const express = require('express');
const path = require('path');
const comparison = require('../data/comparisons.js');
var app = express();

const friends = require('../data/friends.js')
module.exports = (app)=>{
    app.get("/api/friends", function (req, res) {

        //will return list of possible friends
        return res.json(friends);

    });
    app.post("/api/friends", function (req, res) {
        //reads friend JSON
        //this is where everything needs to compare
        // req.body hosts is equal to the JSON post sent from the user take that data and add it to friends array
        var newFriend = req.body;


        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    });
    
    

}
