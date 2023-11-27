// remove duplicate words from array
let ar  = [1,2,3,4,2,1,3,4,6,5,8,7,9]

function sor(a,b) {
    return a-b;
}
let r1 = ar.sort(sor);

let ress = new Set(r1)
console.log(ress);