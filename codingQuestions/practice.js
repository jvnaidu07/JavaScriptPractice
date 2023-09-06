let a = [10,20,50,10,60,20,45,15]
let b = a.length;

let unique = []

for (var i=0; i<b; i++) {
    if (unique.indexOf(a[i]) === -1) {
        unique.push(a[i])
    }
}
console.log(unique)
