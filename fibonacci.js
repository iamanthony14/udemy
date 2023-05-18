var output = [];

function fibonacciGenerator(n){
    for(var i = 1; i <= n; i++){
        if(i==1){
            output.push(0);
        }
        else if(i==2){
            output.push(1);
        }
        else{
            var lastDigit = (output.length) - 1;
            var last2Digit = (output.length) - 2;
            newOutput = output[last2Digit] + output[lastDigit];
            output.push(newOutput);
        }
    }
    return output;
   
}
console.log(fibonacciGenerator(7));