// callback function is a function that is passed to another function to execute after some operation has been completed

function modify(arr, callback) {
    //do something for array
    arr.push(100);
    callback();
}
var arr = [1,2,3,4,5]
modify(arr, function() {
    console.log(arr)
})



function sum(arr, callback) {
    arr.push(254);
    callback();

}
var arr = [6];
sum( arr, function(){
    console.log(arr)
})

// reverse string
let str = "welcome to javascript";
let rev = '';
let len = str.length;

for (var i=len-1; i>=0; i--) {
    rev += str[i]
}

console.log(rev)