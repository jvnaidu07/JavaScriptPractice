let arr = [1,2,4,5];
let n = 5;

let sum = 0;

for (var i=0; i<arr.length; i++) {
    sum += arr[i]
}

let actual = n*(n+1)/2;
let result = actual - sum;
console.log(result);
