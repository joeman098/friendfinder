var path = require("path");
var friends = require("../app/friends.js");

function api (app){
app.post("/api/new", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
})

app.get("/api/all", function(req, res) {
    res.json(friends);
})

}



module.exports = api ;