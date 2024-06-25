let arr = [5,8,7,4,1,2,3,6,5,4,8,9,0,1,4,7,8,5]
let maxx = Math.max(...arr);
let min = Math.min(...arr);

console.log(maxx);
console.log(min);

let max = arr.reduce((a,b) => Math.max(a,b)) // a, b are the arguements - a is the accumulator b is the current
console.log(max);

let minn = arr.reduce((a,b) => Math.min(a,b))
console.log(minn);