//fizzBuzz 
//if start divisible by 3 print fizz
//if end divisible by 5 print buzz
//if number divisible by both 3 and 5 print fizzBuzz
function fizzBuzz(start, end) {

    if( start %3 == 0 ){
        console.log("this is fizz")
    }
    else if (end %5 == 0) {
        console.log("this is buzz")
    }
    else if (start % 3 == 0 && end % 5 == 0) {
        console.log("print fizzBuzz")
    }
    else {
        console.log("print no number matching")
    }
}
fizzBuzz(3, 9)