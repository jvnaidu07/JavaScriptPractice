// slice 'inclusive and exclusive' 

var ar = ["a","b","c","d","e", "f"]

console.log(ar.slice(1,5)) // output bcde

// first value will start from index 0 .. end value will count from ending of the index and it will exclude last value


// splice
var arr = ["1","2","3","4","5"]
arr.splice(1,3, "hi") //output is 1,hi,5
console.log(arr)
// splice first value will start form index 0 and end value will 3 will count from ending of the index 1, it will remove and it will insert last value

const integ = [1,23,4,5,6,7,8,9]
const result = integ.splice(1,3) // output 
console.log(integ)