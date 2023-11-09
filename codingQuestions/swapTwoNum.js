let a =10;
let b=20

temp=a;
a=b;
b=temp

console.log(a)
console.log(b)

//remove unwanted spaces
let f = "   hello world         "
let rr = f.trim();
console.log(rr)
// another example

let space = "hello   world welcome  to   javascript"

let res = space.replace(/\s+/g, ' ')
console.log(res)