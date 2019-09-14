const express = require('express');
const path = require('path');

var app = express();
module.exports = (app)=>{
    app.get("/", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/logic.js", (req, res)=> {
        res.sendFile(path.join(__dirname, "../public/javascript/logic.js"));
    });
    app.get((req, res)=> {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}
