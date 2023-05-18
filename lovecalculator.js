const prompt = require("prompt-sync")();


var yourName = prompt("What is your name? ");
    herName = prompt("What is the name of your lover? ");

function loveCalculator(yourName,herName){
     
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    
    const precent = percentageStatus(loveScore);
    console.log(""+yourName+" + "+herName+" = "+loveScore+"%. "+precent);

}

function percentageStatus(loveScore){
    if(loveScore > 70){
        return "You love each other";
    }
    else if(loveScore > 30 && loveScore <= 70){
        return "";
    }
    else{
        return "You go together like oil and water";
    }
}

loveCalculator(yourName, herName);
