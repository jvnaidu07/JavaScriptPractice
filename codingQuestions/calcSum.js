let arr = [1,2,32,1,4,5,6,32,1,45,6]
let res = arr.reduce((total, current) => total + current)
console.log(res);


// another example

let arr1 = [1,2,32,1,4,5,6,32,1,45,6];

let len = arr1.length;
let sum = 0;

for (var i=0; i<len; i++) {
    sum += arr1[i]
}
console.log(sum);

if (sum === res ) {
    console.log(true)
}
else {
    console.log(false);
}