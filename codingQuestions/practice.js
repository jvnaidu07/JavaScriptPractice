<<<<<<< HEAD
let str = "mango banana mango apple orange apple grapes grapes orange"
let arr = str.split(" ")
let unique = [];

for (var i=0; i<arr.length; i++) {
    if(unique.indexOf(arr[i]) == -1) {
        unique.push(arr[i])
    }
}
console.log(unique);
=======
var string = "Welcome to this Javascript Guide!";
var len = string.length
var rev = '';

for (var i=len-1; i>=0; i--) {
    rev+=string[i]

}
console.log(rev)
>>>>>>> 2da94c8f9e590861b8c22348ffb07487fc611616
