//JS coding questions
// find secondLargest number from array
var arr = [1,2,3,62,4,5,6,1,8,9,7,5,42,12,3,2]
var len = arr.length;

var max = -Infinity
var sendmax = -Infinity

for (var i=0; i<len; i++) {
    max = Math.max(max, arr[i])
}
console.log(max)

for (var i=0; i<len; i++) {
    if(arr[i] < max) {
        sendmax = Math.max(sendmax, arr[i])
    }
}
console.log(sendmax)


