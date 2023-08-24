//JS coding questions
// find secondLargest number from array
var arr = [1,2,3,62,4,5,6,1,8,9,7,5,42,12,3,2]
var len = arr.length;

var max = -Infinity
var sendmax = -Infinity

for (var i=0; i<len; i++) {
    max = Math.max(max, arr[i])
}
console.log(max)

for (var i=0; i<len; i++) {
    if(arr[i] < max) {
        sendmax = Math.max(sendmax, arr[i])
    }
}
console.log(sendmax)
// remove duplicate elements from string
let str = "mango banana mango apple orange apple grapes grapes orange"
let arr1 = str.split(" ")

let unique = [];

for( var i=0; i<arr1.length; i++) {
    if(unique.indexOf(arr1[i]) == -1) {
        unique.push(arr1[i])
    }
}
console.log(unique)

//get the repeated element from a string
let str1 = "mango banana mango apple grapes orange"
let arr2 = str1.split(" ")
let lenn = arr2.length;
let repeated = {};

for(var i=0; i<lenn; i++) {
    let word = arr2[i]
    if(repeated[word] === undefined) {
        repeated[word] = 1
    }
    else {
        repeated[word]++;
    }
}

for(let word in repeated) {
    if(repeated[word] > 1) {
        console.log(word)
    }
}

// find each character length
var input = ["a","a","b","b","b","c","c","c","c"]
var numbeChar = {};

for(var i=0;i<input.length; i++) {
    let word5 = input[i]
    if(numbeChar[word5] === undefined) {
        numbeChar[word5] = 1
    }
    else {
        numbeChar[word5]++;
    }
}
console.log(numbeChar)