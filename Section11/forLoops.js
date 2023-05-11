//for loop, for in, for of
// i++ increment and i-- decrement

for(var i=1; i<10; i++){
    console.log(i)
}

for(var i=1; i<=5; i++){
    console.log("Hello" + ' ' + i)
}

// never ending loop
// infite loop

// for(var i=0; i<10; i--){
//     console.log(i)
// }
//above loop is infite loop never ending

// for loop with an if conditon
for(var i=0; i<5; i++){
    if(i == 0){
        console.log("Say Hello")
    }
    else if(i ==1) {
        console.log("Say good morning")
    }
    else if(i ==2) {
        console.log("good afternoon")
    }
    else if(i == 3) {
        console.log("good evening")
    }
    else if(i == 4) {
        console.log("good night")
    }
}


// for even numbers
// % is the remainder
// == equal to
//!= does not equal to
for(var i=0; i<=10; i++){
    if(i%2 == 0){
        console.log(i)
    }
}
// ofr odd numbers
for(var i=0; i<=10; i++){
    if(i%2 != 0){
        console.log(i)
    }
}

// breaking thr for loop
for(var i=0; i<10; i++){
    if(i ==5){
        break;
    }
    else{
        console.log(i)
    }
}

//for loop with an array

var things = [1,2,"Hello", "bye"]

for(var i=0; i<4; i++){
    console.log(things[i])
}


console.log(things[2])

//Activity: this will be a bit tricky
var answer = prompt("YES or NO")
var answers = ["YES", "NO"]
var responses = ["You said Yes", "You said NO", "You didn't follow instructions"]

for(var i=0; i<2; i++){
    if(answer != answers[0]  && answer != answers[1]){
        console.log(responses[2])
        break;
    }
    else if (answer == answers[i]) {
        console.log(responses[i])
    }
}

// for in loop nested
var numbers = [1,2,3,4,5]
var letters = ["a","b","c"]

for(var i=0; i<5; i++) {
    console.log(numbers[i])
    for(var t=0; t<3; t++){
        console.log(letters[t])
    }
}

