var string = "Welcome to this Javascript Guide!";
var len = string.length
var rev = '';

for (var i=len-1; i>=0; i--) {
    rev+=string[i]

}
console.log(rev)