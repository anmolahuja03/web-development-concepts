var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there");
});

app.get("/speak/:animal", function(req, res) {
    
    // if(animal === "cat") {
    //     sound = "meow";
    // } else if(animal === "dog") {
    //     sound = "bhow";
    // }

    var sounds = {
        cow : "Moo",
        dog : "woof"
    }

    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});


app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i < times; i++) {
        result += message + " " + times;
    }
    
    res.send(result);
})

app.listen(5000, function() {
    console.log("listening on port");
});