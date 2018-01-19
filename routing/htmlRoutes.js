var path = require("path");
function html(app){

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.use("/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/style.css"));
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}

module.exports = html;