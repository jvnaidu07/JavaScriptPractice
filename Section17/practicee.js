
let str = "0123400560124";
let res = str.split("").map(Number)

let result = res.reduce((total, sum) => total+sum);
console.log(result);
