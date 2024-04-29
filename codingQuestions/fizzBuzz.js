//fizzBuzz 
//if start divisible by 3 print fizz
//if end divisible by 5 print buzz
//if number divisible by both 3 and 5 print fizzBuzz
let n = 10;

for (var i=0; i<n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if ( i % 3 == 0) {
        console.log("Fizz");
    }
    else if ( i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// using functions

function fizzBuzz(i, j) {

    if (i % 3 == 0 && j % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if ( i % 3 == 0) {
        console.log("Fizz");
    }
    else if ( j % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i,j);
    }

}
console.log(fizzBuzz(3,5));