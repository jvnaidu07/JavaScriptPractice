
function lengthWithoutSpace(str) {

    let getValue = str.replace(/ /g, "");
    let totalSpace = getValue.length;
    return totalSpace;

}
console.log(lengthWithoutSpace("this is summer season"));


function sumOfArr(arr) {

    let len = arr.length;
    let sum = 0;

    for (var i=0; i<len; i++) {
        sum += arr[i]
    }
    return sum;

}
console.log(sumOfArr([11,2,3,4,54,1,10]));

function doubleArr(arr) {
    let double = arr.map(n => n*2)
    return double;
}
console.log(doubleArr([1,2,3]));

function tripleArr(ar) {
    let triple = ar.map(n => n*3) 
    return triple;
}
console.log(tripleArr([3,4,5,6,7]));