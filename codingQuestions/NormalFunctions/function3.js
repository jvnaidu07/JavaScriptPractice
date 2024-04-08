//that reads the same order in reverse - if the sentence same like backwards  and frontwards

function palindrome(str) {
    let rev = "";
    let len = str.length;
    

    for (var i=len-1; i>=0; i--){
        rev += str[i]
    }

    let result = str == rev ? "palindrome" : "not a palindrome"
    return result;

}
console.log(palindrome("civic"));