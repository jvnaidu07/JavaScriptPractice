// JavaScript coding questions

//1. create a function and add two numbers
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 321))
//calculate the length of the string and characters and words
var str = "this is javascript and i am learning"
var str = str.split(" ").join("")
var len = str.length;
console.log(len);

//computing max length of the string
var str1 = "this is javascript and i am learning"
var arr = str1.split(" ")
var newArr = [];

for (let i of arr) {    // for in it will start from index 0 - for off loop it will start as usual
    newArr.push(i.length)
}

let sor = newArr.sort(function (a, b) {
    return b - a;
})

// find minimum length from string

var str4 = "this is javascript and i am learning"
var arr4 = str4.split(" ")
var newArr1 = [];

for (let i of arr4) {
    newArr1.push(i.length)
}

let sor1 = newArr1.sort(function (a, b) {
    return a - b;
})

console.log(sor1)
var result1 = arr4.filter((val) => val.length === sor1[0])

console.log("maximum length of array" + ' ' + result1.join())

// find repeated words from the array

var arrr = ["mango", "apple", "orange", "mango", "banana", "guava", "grapes"]
var lenn = arrr.length;
var repeated = {};

for (var i = 0; i < lenn; i++) {
    let word = arrr[i]
    if (repeated[word] === undefined) { // undefined it is not return any value
        repeated[word] = 1;
    }
    else {
        repeated[word]++;
    }
}
console.log(repeated)
for (let word in repeated) {
    if (repeated[word] > 1) {
        console.log(word)
    }
}
// another example
var strr = "this is is javascript javascript"
var arr1 = strr.split(" ")
var repeated1 = {};

for (var i = 0; i < arr1.length; i++) {
    let word1 = arr1[i]
    if (repeated1[word1] === undefined) {
        repeated1[word1] = 1;
    }
    else {
        repeated1[word1]++;
    }
}

for (let word1 in repeated1) {
    if (repeated1[word1] > 1) {
        console.log("repeated word is" + " " + word1)
    }
}
//another example
//find repeated words from an array
let arr5 = ["a b c d c d s e r t c s a b"]
let arr6 = arr5.join("").split(" ");
let repeated6 = {};
let len6 = arr6.length;

for(var i=0; i<len6; i++) {
    let word6 = ar6r[i]
    if(repeated6[word6] === undefined) {
        repeated6[word6] = 1;
    }
    else{
        repeated6[word6]++;
    }
}
for(let word6 in repeated6) {
    if(repeated6[word6] > 1){
        console.log(word6)
    }
}
console.log(repeated6)

// remove duplicate characters using string as well as array

var arr2 = ["mango", "apple", "orange", "mango", "banana", "guava", "grapes", "apple", "orange"]
var len2 = arr2.length
var unique = [];

for (var i = 0; i < len2; i++) {
    if (unique.indexOf(arr2[i]) === -1) {
        unique.push(arr2[i])
    }
}

console.log(unique)

// Write a JavaScript function to find the highest value in an array
var arr3 = [1, 2, 35, 1, 2, 6, 41, 89, 2]
var len3 = arr3.length;
var max = arr3[0]

for (var i = 0; i < len3; i++) {
    if (max < arr3[i]) {
        max = arr3[i]
    }
}
console.log(max);

// remove duplicate words from string
var str3 = "mango apple orange mango banana guava grapes apple orange"
var arr3 = str3.split(" ")
var len3 = arr3.length
var unique1 = [];

for (var i = 0; i < len3; i++) {
    if (unique1.indexOf(arr3[i]) === -1) { //indexOf() method returns -1 if the value is not found - if the value is found it will return 1
        unique1.push(arr3[i]) //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    }
}

console.log(unique1)

//reverse string
var str = ["nurses run"]

var str = str.join("").replace(" ", "")
let len4 = str.length;
let rev = '';

for (var i = len4 - 1; i >= 0; i--) {
    rev += str[i]
}

console.log(rev)
var res = str === rev ? "palindrome" : "not a palindrome"
console.log("reverse string " + ' ' + res)

//find maximum number from an array
let ar4 = [1,2,1,3,,4,5,56,1,2,3]
let lenn4 = ar4.length;

let maxx = ar4[0] 

for (let i=0; i<lenn4; i++) {
    if (ar4[i] > maxx) {
        maxx = ar4[i]
    }
}
console.log(maxx)