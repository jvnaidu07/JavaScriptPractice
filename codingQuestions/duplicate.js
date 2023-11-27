
// remove all the duplicates from an array
let ar = [1,1,2,3,2,4,5,10,4,2,3,4,5,6,6];

function compareNumbers(a,b) {
    return a-b;
}
let r1 = ar.sort(compareNumbers)
let resul = new Set(ar)

console.log(resul);


// another example
let arr = [1,1,2,3,2,4,5,10,4,2,3,4,5,6,6];
let len = arr.length;
let unique = [];

for (var i=0; i<len; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i])
    }
}
console.log(unique);

let str = "mango banana mango apple orange apple grapes grapes orange";
let arrr = str.split(" ")
let ress = new Set(arrr)
console.log(ress);
