// remove duplicates from string
let str = "1,2,3,4,5,6,2,1,4,3,2,1,4,2,3,1,4";

let arrr = str.split(",");
let res = new Set(arrr)

console.log(res);

