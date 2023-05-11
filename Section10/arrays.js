// array concepts
var arr = [];

var array = ["banana", "mango", "apple"];
console.log(array[0])

var ar = [1,2,3, "test", true];
console.log(ar[3])

//array is start from 0 index
//push and pop
// pop will remove last element from an array
// push wuill add the element into an array
array.pop();
console.log(array);

var arr1 = ["1","2","3","4","5","6"];
arr1.pop()
console.log(arr1)

arr1.push("6")
console.log(arr1)

// shift and unshift
// shift will remove the first element from an array
// unshift will add the element into front of the array

var arr1 = ["1","2","3","4","5","6"];
arr1.shift();
console.log("remove the first element from an array" + ' '+ arr1)
arr1.unshift("1");
console.log("add the first element in the array" + ' ' +arr1);
// changing specific elements from an array

var arr2 = ["banana", "apple", "mango", "orange"]
arr2[0] = "carrot";
console.log(arr2)

// splice and slice
//using splice we delete the elements from an array and we can add the elements in array
var arr2 = ["banana", "apple", "mango", "orange"]
arr2.splice(0,3, "red") //here 0,3 means from 0 to 3 ... first 3 elements will remove from an array and add the array using string 
console.log(arr2)

var ar = ["banana", "apple", "mango", "orange"]
ar.splice(1,2, "jam")
console.log(ar)
// slice 
var arr2 = ["banana", "apple", "mango", "orange"]
var ress = arr2.slice(2) 
console.log(ress)
// slice deleting elements from an array permanently
var ven = ["banana", "apple", "mango", "orange"]
var res = ven.slice(2)
console.log(res)

//anothe rexample
var ar1 = ["1","2","3","4","5","6","7"]
var tt = ar1.slice(2)
console.log(tt)



var books=[]
var answer

answer = prompt("What is your first favorite book?")
books.push(answer)
answer = prompt("What is your second favorite book?")
books.push(answer)
answer = prompt("What is your third favorite book?")
books.push(answer)
answer = prompt("What is your forth favorite book?")
books.push(answer)
answer = prompt("What is your fifth favorite book?")
books.push(answer)
answer = prompt("What is your sixth favorite book?")
books.unshift(answer)
books.pop()
console.log(books)

var book = ["a","b","c", "d","e","f"]
book.unshift("q")
book.pop()
