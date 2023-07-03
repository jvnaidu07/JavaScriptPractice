<<<<<<< HEAD
var str = "mom";
var len = str.length;
var rev = '';

for (var i=len-1; i>=0; i--) {
    rev += str[i]
}
console.log(rev)
=======

var arrr = ["mango", "apple", "orange", "apple", "mango", "banana", "guava", "grapes"]
var len = arrr.length;
var remdup = [];

for (var i=0; i<len; i++) {
    if (remdup.indexOf(arrr[i]) === -1) {
        remdup.push(arrr[i])
    }
}
console.log(remdup)
>>>>>>> cc86792e0bf45089374a634522146aea802818f2
