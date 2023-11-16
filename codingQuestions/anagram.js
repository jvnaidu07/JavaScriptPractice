// if the both string characters same - we need to call it as a anagram
let a = 'listen';
let b = 'silenT';
let str1 =  a.toUpperCase()
let str2 = b.toUpperCase()

let l1 = str1.length;
let l2 = str2.length;


let r1 = str1.split("").sort().join("")
let r2 = str2.split("").sort().join("")

if (r1 === r2) {
    console.log("given string is anagram")
}
else {
    console.log("given string is not anagram")
}

console.log(str1);
console.log(r2)