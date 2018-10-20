"use strict";

var eleArray = [];
var people = ["laurence","Mike", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
var key = null;


function start() {
    //make copy of array
    eleArray = people.slice();
    
    //randomize array
    eleArray.sort(function (a,b) {
        return 0.5 - Math.random();
    });
    console.log(eleArray);
    build();
}

function build() {
    var output = "<h1>Name Game</h1>";
    for(var i = 0;i<eleArray.length;i++) {
        var str = eleArray[i];
        //split, sort, randomize, and join strings to scramble names
        var shuffled = str.split("").sort(function() {
            return 0.5 - Math.random()
        }).join("");
        output += "<div class='box'>Hidden " + (i+1) + "<div>" + shuffled + "</div>" + "</div>";
    }
    document.getElementById("output").innerHTML = output;
}

