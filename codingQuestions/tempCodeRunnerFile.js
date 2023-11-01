let arr = ["banana","mango","apple", "fruit","lemon","you","wer"]
let slic = arr.slice(2,-3)
console.log(slic)

let remLast = arr.pop() //The pop() method removes the last element from an array and returns that element.
console.log(remLast)
let remFir = arr.shift() // shift method will remove the first ele from an array and it returns that ele
console.log(remFir);

let addEleme = arr.unshift("royal")//unshift will add the element at first
console.log(arr)
let len = arr.length
console.log(len)
arr.unshift("coconut", "pineapple")
console.log(arr)
arr.join(" ")
let result = arr.filter(val => val.length != 'you')
console.log(result)

