// reverse array;

let arr = [1,2,3,4,5,6];

let res = arr.reverse();
console.log(res);

// another example

let ar = ["a","b","c","d","e","f"]
let len = ar.length;
let rev = [];

for (var i=len-1; i>=0; i--) {
    rev += ar[i]
}
console.log(rev);

//another example
let ar1 = ["this is javascript"];
let strr = ar1.join("");
let removeSpaces = strr.replace(/ /g, "")
let lenn = removeSpaces.length;
let revv = '';

for (var i=lenn-1; i>=0; i--) {
    revv += removeSpaces[i]
}

console.log(revv);


