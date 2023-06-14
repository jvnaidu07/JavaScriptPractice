
var arrr = ["mango", "apple", "orange", "apple", "mango", "banana", "guava", "grapes"]
var len = arrr.length;
var remdup = [];

for (var i=0; i<len; i++) {
    if (remdup.indexOf(arrr[i]) === -1) {
        remdup.push(arrr[i])
    }
}
console.log(remdup)