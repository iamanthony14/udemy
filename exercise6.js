const prompt = require("prompt-sync")();


var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name : ");
    if(guestList.includes(guestName)){
        console.log("Welcome");
    }
    else{
        console.log("Youre not invited");
    }