//anagram
let str = "triangle"
let str1 = "integral"

let l1 = str.toUpperCase().split("").sort().join("")
let l2 = str1.toUpperCase().split("").sort().join("")

if (l1 == l2) {
    console.log('given string is anagram')
}
else {
    console.log('not a anagram');
}


