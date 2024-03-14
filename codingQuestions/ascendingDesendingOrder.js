//ascending order
let arr = [1,4,5,2,1,4,9,8,7,4,1,22,3,6,0,14,58]
let result = arr.sort(function (a,b) {
    return a-b;
})
console.log(result);
//descending order

let descendingOrder = arr.sort(function(a,b) {
    return b-a;
})
console.log(descendingOrder);

let num = 35465465;
let insertComma = num.toString().split("").sort()
console.log(insertComma)



//compare length in both the results
let int = 1235425498741235040;
let str = int.toString();
let arr1 = str.split("");
let len = arr1.length;

let ascendingOrder = arr1.sort();
let descendingOrder1 = arr1.sort(function(a,b) {
    return b-a;
})

console.log(descendingOrder1.length);

if (len == descendingOrder1.length )
{
    console.log("length is same in both the results")
}
else {
    console.log("length is not same")
}
