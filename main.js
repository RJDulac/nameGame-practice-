"use strict";

var eleArray = [];
var people = ["ben","laurence","Mike","Odessa", "Matt", "Ryan", "Brian", "John", "Larry", "Kim", "Joanne", "Lisa", "Janet", "Jane"];
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
    findPerson();
}

function findPerson() {
    //randomize key
    key = eleArray[Math.floor(Math.random() *eleArray.length)];
    
    message1("find this name: " + key);

}



function build() {
    var output = "<h1>Name Game</h1>";
    for(var i = 0;i<eleArray.length;i++) {
        var str = eleArray[i];
        //split, sort, randomize, and join strings to scramble names
        var shuffled = str.split("").sort(function() {
            return 0.5 - Math.random()
        }).join("");
        output += '<div class="box" onmouseover="updateText(this,\''+shuffled+'\')" onmouseout="updateText(this,\'Hidden '+(i+1)+'\')" onclick="eElement(this,\''+str+'\')" >Hidden '+(i+1)+'</div>';
    }
    document.getElementById("output").innerHTML = output;
}

function updateText(t, message) {
    t.innerHTML = message;

}

function eElement(t,s) {
    if(s===key) {
        //grab key value
        var n = eleArray.indexOf(s);
        //correct
        message2("Correct!");
        //index number and remove one with splice
        eleArray.splice(n,1);
        //remove html going from parent to child - set a timer and maybe fade animation
        t.parentNode.removeChild(t);
        findPerson();
    } else {
        //wrong
        message2("Wrong!");
    }
    if(eleArray.length <=0) {
        //game over
        message1("GAME OVER!");
    }
}

function message1(m) {
    document.getElementById("message1").innerHTML = m;
}

function message2(m) {
    document.getElementById("message2").innerHTML = m;
}