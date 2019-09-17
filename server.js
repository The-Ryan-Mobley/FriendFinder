
const express = require('express');
const path = require('path');

//.resolve(__dirname, '../app.js'));
const app = express();


const PORT = process.env.PORT || 1337;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require('./app/routing/htmmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
