//first write the code and debug
// get maximum value from the array
var arr = [7,2,1,6,54,86,3,2,100]
var len = arr.length;
var max = arr[0]
var min = arr[0]

for(var i=0; i<len; i++) {
    if( max < arr[i]) {
        max = arr[i]
    }
}
console.log(max)


// get minimum value from an array
for(var i=0; i<len; i++) {
    if(min > arr[i]) {
        min = arr[i]
    }
}
console.log(min)