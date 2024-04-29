// remove duplicates in an array

function removeDuplicates(arr) {
    let len = arr.length;
    let result = new Set(arr);
    return result;
    
}
let res = removeDuplicates([1,1,1,2,2,3,3,0,0,6,7,4,4,5,3,5])
console.log(res)

// remove element inside an array
let arr = [1,2,3,4,5,6,1,1,1,1,1];

let result = arr.filter((n) => n != 1)
console.log(result);

// remove any only one element
//remove zero's
let num = 120003300020200020;
let str = num.toString();
let arr1 = str.split("").map(Number);
let res1 = arr1.filter((n) => n != 0)
console.log(res1)
