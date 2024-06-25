let arr = [1,2,5,4,1,2,8,9,7,1,2,3]
let len = arr.length;
let max = -Infinity;
let sendmax = -Infinity;


for(var i=0; i<len; i++) {
    max = Math.max(max, arr[i])
}
for(var i=0; i<len; i++) {
    if(arr[i] < max) {
            sendmax = Math.max(sendmax, arr[i])
    }
}

console.log(max)
console.log(sendmax);


