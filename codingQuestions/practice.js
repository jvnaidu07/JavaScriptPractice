let str = "mango banana mango apple orange apple grapes grapes orange"
let arr = str.split(" ")
let unique = [];

for (var i=0; i<arr.length; i++) {
    if(unique.indexOf(arr[i]) == -1) {
        unique.push(arr[i])
    }
}
console.log(unique);