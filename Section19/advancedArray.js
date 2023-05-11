// advanced array concepts

var arr = ["a","b","c","d","e"]
arr.length;
arr.toString();

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