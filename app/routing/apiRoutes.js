const express = require('express');
const path = require('path');
const comparison = require('../data/comparisons.js');
var app = express();

const Friendobjs = require('../data/friends.js')
module.exports = (app)=>{
    app.get("/api/friends", function (req, res) {

        //will return list of possible friends
        let returnArr = comparison.match();
        return res.json(returnArr);

    });
    app.post("/api/friends", function (req, res) {
        //need to parse score beforepush
        // req.body hosts is equal to the JSON post sent from the user take that data and add it to friends array
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
        console.log('pushed');
        res.json(newFriend);
    });
    
    

}
