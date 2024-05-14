let arr = [1,1,2,3,3,4,5,1,2,3,4,3,2,1,2,3,5,6,6,7,6]
let len = arr.length;
let count = {};


for (var i=0; i<len; i++) {
    let word = arr[i]
    count[word] =count[word] ? count[word] +1 : 1;
    // ? : -> ternary operators
}
console.log(count);


for(let word in count) {
    if(count[word] > 4) {
        console.log(word)
    }
}

/*
count{
   ar[i] [1,1,2,3,3,4,5,1,2,3,4,3,2,1,2,3,5,6,6,7,6]
}
*/