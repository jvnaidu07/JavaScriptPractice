function removeDupli(str) {
    let arr = str.split(" ");
    let result = new Set(arr);
    return result;
}
console.log(removeDupli("mango apple orange mango banana guava grapes apple orange"))



// another example

function removeDuplicates(str1){
    let ar = str1.split(" ")
    let len = ar.length;
    let unique = [];

    for (var i=0; i<len; i++) {
        if (unique.indexOf(ar[i]) == -1) {
            unique.push(ar[i])
        }
    }
    return unique;
}

console.log(removeDuplicates("m a s a x a s x a a d d e r r t t y a a s a n m").join(" "));
