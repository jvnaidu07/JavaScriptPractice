let arr = [1,2,3,5,4,1,2,3,5,4,1,2,3,5,4,1,2,5]
let len = arr.length;

let result = new Set(arr)
console.log([...result]) //-> the spread operator it will convert them into array/string