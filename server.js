// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./routing/htmlRoutes.js");
var apiRoutes = require("./routing/apiRoutes.js");

// Sets up the Express App and routes
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//friends
//==================


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
htmlRoutes(app);
apiRoutes(app);


// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});