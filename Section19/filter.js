// using filter
var num = [1,2,3,4,5,6,8,10,12,14]
var newArr = num.filter(isEven)

function isEven(value, index, array){
    return value % 2 == 0
}
console.log(newArr)

var num1 = [1,3,7,9,6,5,11,13,25,23,29,27,31]
var newA = num1.filter(isOdd)

function isOdd(value, index, array) {
    return value % 2 !== 0;
}
console.log(newA)
