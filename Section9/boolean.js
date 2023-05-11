var strr = true;

if( strr != true) {
    console.log("true")
}
else {
    console.log('false')
}

if(2===2) {
    console.log(true)
}

var income = 1000;
var income1 = 2000;
console.log(income > income1)

if(income && income1) {
    console.log(income > income1)
}

console.log(income < income1)

// Activity truth or dare
var answer = prompt("what is the color of your shirt? Y or N")
var isItTrue;

if(answer == "Y") {
    isItTrue = true
    console.log("this is your favourite color shirt")
}
else if(answer == "N") {
    isItTrue = false;
    console.log("this is not your favourite color")
}
else {
    console.log("i don't understand")
}


