const prompt = require("prompt-sync")();

var year = prompt("Enter year : ");

function isLeap(year) {
    
    /**************Don't change the code above****************/    
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                console.log("A leap year");
            }
            else{
                console.log("Not a leap year");
            }
        }
        else{
            console.log("A leap year");
        }
    }
    else{
        console.log("Not leap year");
    }
    
        
    
    /**************Don't change the code below****************/    
    
    }
    isLeap(year);