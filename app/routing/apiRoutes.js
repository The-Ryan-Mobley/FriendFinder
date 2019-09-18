const express = require('express');
const path = require('path');
const comparison = require('../data/comparisons.js');
var app = express();

const Friendobjs = require('../data/friends.js')
module.exports = (app)=>{
    app.get("/api/friends", function (req, res) {
        let returnArr = comparison.match();
        return res.json(returnArr);
    });
    app.get("/api/currentuser", function (req, res) {
        return res.json(Friendobjs.user);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        for(key in newFriend.score){ //converts score strings to ints
            newFriend.score[key] = parseInt(newFriend.score[key]);
        }
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        if(Friendobjs.user.length === 0){
            Friendobjs.user.push(newFriend);
        }
        else{
            Friendobjs.friends.push(Friendobjs.user[0]);
            Friendobjs.user[0] = newFriend;
        }
        console.log('data pushed');
        res.json(newFriend);
    });
    
    

}
