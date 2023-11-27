
let str = "1,2,3,4,5,2,1,3,400";
let rep = str.replace(/,/g, "");
let arr = rep.split("")
console.log(arr)

let removeZeroFromArr = arr.filter(rem => rem !=0)
console.log(removeZeroFromArr)

//remove last four elements

let remLastFourEle = arr.splice(7) //output 1234521
console.log(arr)

let months = ["January", "February", "Monday", "Tuesday"];
let result = months.slice(2,-1) //output is jan, feb, tue
console.log(result)

