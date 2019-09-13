const express = require('express');
const path = require('path');

var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/hello", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});