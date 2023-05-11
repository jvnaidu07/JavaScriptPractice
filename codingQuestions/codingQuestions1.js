//check whether the value is odd or even

var arr = [1,2,3,4,5,6,9,7,8,524,13,6]
var len = arr.length;

for (var i=0; i<len; i++) {
    if (arr[i]%2 == 0) {
        console.log("print even numbers" + ' ' + arr[i])
    }
    else if (arr[i] %2 !== 0) {
        console.log("print odd numbers" + ' ' + arr[i])
    }
}

if (2%2 != 0) {
    console.log("not a even number")
}
else {
    console.log("this is even")
}

//Write a JavaScript function to calculate the sum of values in an array
var arr = [1,2,3,2,33,789,323,32]
var len1 = arr.length;
var sum = arr[0];

for (var i=0; i<len1; i++) {
    sum += arr[i]
}
console.log(sum)
//as well as calculate the avg from array
var avg = sum / len;
console.log(avg)
//convert integer to string
var num = 5446
var str
str = num.toString()
console.log(str)

var num = 1233
var str
str =num.toString()

console.log(str)

//empty an array
var ar = ["a","b"]
var anotherar = ar
ar = []
console.log(ar)

//check whether the number is an integer or not

var numm = 2
if (numm % 2 == 0) {
    console.log("this number is integer")
}
else {
    console.log("this number is not integer")
}


