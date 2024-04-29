let num = 12300058700;
let str = num.toString();
let arr = str.split("").map(Number)

let res = arr.filter(val => val !=0)
console.log(res);
