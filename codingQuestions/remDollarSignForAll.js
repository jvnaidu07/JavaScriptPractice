let str = "$1 $2 $3 $4 $5"
let result = str.replace(/\$/g, "")
console.log(result);

let str1 = "$1 $2 $3 $4 $5"
let result1 = str.replace(/\$/g, " ")
console.log(result1)