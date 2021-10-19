var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

// example /r/anmol , /r/yash (runs for everything of type /r/abc but not for /r/abc/def)
app.get("/r/:subredditName", function(req, res) {
    res.send("Hi there! Looking for something?");
});

// Route that doesn't define - Order matters here
app.get("*", function(req, res) {
    res.send("Hey there, you are at wrong place! :( ");
});

// tell express to listen for requests (start server)

// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("Server has started!!");
// });

app.listen(5000, function() {
    console.log("Server has started!!");
});