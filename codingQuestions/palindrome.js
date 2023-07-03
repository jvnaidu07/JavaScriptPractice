const { concat } = require("lodash");

// assignment palindrome
var str = "race car";
var str = str.replace(" ", "")
var len = str.length
var palin = '';

for(i=len-1; i>=0; i--) {
    palin += str[i]
}
console.log(palin)

if(str === palin) {
    console.log("the given string isa palindrome")
}
else {
    console.log(" the given string is not a palindrome")
}
// or using ternary operators

var result = str === palin ? "palindrome" : "not a palindrome"
console.log(result)

//convert string to number
var str = "9";
console.log(typeof(+str))
//convert number to string
let strr = 9;
console.log(typeof(strr+" "))
//javascript string ,ethods
//trim(),charAt(), concat(), indexOf(),lastIndexOf()
//slice, tostring,substring,toUppercase,toLowercase etcc..
//undefined
let srt;
console.log(srt)//non-existing property will return undefined
//null -- there is no value will return null