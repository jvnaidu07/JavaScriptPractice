// sorting an array
var arr = ["a","b","c"];

arr.sort();

var arr1 = [1,2,3,4,5,67]
var sor = arr1.sort(function (a,b) {
    return b-a;
})
console.log(sor)

//array forEach
var ar1 = [1,2,3,4,5,6]
ar1.forEach(funcky)

function funcky(value, index, array){
    console.log(index + " : " + value + " : " +" & " + array[index] + "\n")
}

