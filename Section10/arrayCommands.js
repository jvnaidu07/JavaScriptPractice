var arr = ["mango", "apple"]
arr.unshift("carrot")
arr.shift()

arr.pop()
arr.push("banana")
console.log(arr)

var arr1 = ["blue", "yellow", "purple", "red"];
var result = arr1.slice(2);
console.log(result)

arr1.splice(1,1, "brown")
console.log(arr1);

// another example
let arr2 = ["mango", "apple"]
var ele = arr2.pop(); //it will remove last value from an array
console.log("remove the first element from an array" + ' ' + ele) //here the removing element is 'apple'
console.log(arr2) //and latest answer from an array is 'mango'
arr2.push("banana", "carrot") //here we are pushing another two elements into an array
console.log(arr2) //here the answer is 3 elements 'mango, banana, carrot'

// for shift and unshift
arr2.shift(); //shift will remove the first element from an array
console.log(arr2)
arr2.unshift("pineapple", "coconut") //here unshift will add the elements into an array
console.log(arr2)

//splice and slice examples

var arr3 = ["concrete", "cement", "aggregates", "water", "masonary", "steel", "money"]
arr3.splice(0,2, "mango", "banana") //here first two elements will remove from an array then it will add some other elements
console.log(arr3)

var sli = arr3.slice(2) // here slice will remove 2 elements from an array permanently
console.log(sli)

