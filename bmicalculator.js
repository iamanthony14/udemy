const prompt = require("prompt-sync")();


//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(){
    var weight = 65;
    var height = 1.8;
    var bmi = Math.round(weight / (height*height));

    return bmi;
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
if(bmiCalculator()<18.5){
console.log("Your BMI is "+ bmiCalculator() + ", so you are underweight.");
}
if(bmiCalculator()>=18.5 && bmiCalculator()<=24.9){
console.log("Your BMI is "+ bmiCalculator() + ", so you are normal.");
}
if(bmiCalculator()>=25 && bmiCalculator()<=29.9){
console.log("Your BMI is "+ bmiCalculator() + ", so you are overweight.");
}
if(bmiCalculator()>=30 && bmiCalculator()<=34.9){
console.log("Your BMI is "+ bmiCalculator() + ", so you are obese.");
}
if(bmiCalculator()>35){
console.log("Your BMI was "+ bmiCalculator() + ", so you are extremely obese.");
}