var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];



function whosPaying(names) {

    var numberOfPeople = names.length;

    var randomNumOfPeople = Math.floor(Math.random() * numberOfPeople);

    var randomPerson = names[randomNumOfPeople]



    return randomPerson + " is going to buy lunch today!";

}

console.log(whosPaying(names));