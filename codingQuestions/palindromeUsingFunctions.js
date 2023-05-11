function palindromeCheck(word) {
    let reverse = word.split("").reverse().join("")
    console.log(reverse);


    var res = word === reverse ? "palindrome" : "not a palindrome"
    console.log(res)

    if (word.toLowerCase() == reverse.toLowerCase()) {
        console.log("The word is palindrome")
    } else {
        console.log("The word is not palindrome")
    }
}
palindromeCheck("mom")


// using arrays
var arr = ["level"]
arr = arr.join("")
var len = arr.length;
var rev = []

for(var i=len-1; i>=0; i--) {
    rev += arr[i]
}
console.log(rev)

if (arr === rev) {
    console.log("it is a palindrome")
}
else {
    console.log("it is not a palindrome")
}