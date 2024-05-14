// remove duplicate words from array
let ar  = [1,2,3,4,2,1,3,4,6,5,8,7,9,1,1,1,2,2,3,4,5,6,5,4,1,2,3,4,5,2,1,4]

function sor(a,b) {
    return a-b;
}

let r1 = ar.sort(sor);

let ress = new Set(r1)
console.log(ress);

// another example
let unique = [];
let len = ar.length;

for (var i=0; i<len; i++) {
    if (unique.indexOf(ar[i]) === -1) {
        unique.push(ar[i])
    }
}
console.log(unique);










