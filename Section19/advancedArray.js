// advanced array concepts

var arr = ["a","b","c","d","e"]
arr.length;
arr.toString();
console.log(arr);

//merging arrays
var ar1 = [1,2,3,4]
var ar2 = [5,6,7,8]
var ar3 = [9,10]

var newAr = ar1.concat(ar2)
var newArr = ar2.concat(ar1)
var newArr1 = ar1.concat(ar2, ar3)
console.log(newArr)
console.log(newAr)
console.log(newArr1)

// find the numbers which is more than 30
let n = [100,3,4,5,6,74,5,25,87,69,57]
let max = n.filter(n => n > 30)
console.log(max);

// find the numbers which is less than 30
let n1 = [100,3,4,5,6,74,5,25,87,69,57]
let min = n1.filter(n => n < 30)
console.log(min)