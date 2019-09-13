
const express = require('express');
const path = require('path');

//.resolve(__dirname, '../app.js'));
var app = express();
const PORT = process.env.PORT || 3000;
require('./app/routing/htmmlRoutes.js')(app);
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
