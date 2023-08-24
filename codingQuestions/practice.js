let a = ["this is javascript and i am learning i"]
let b = a.join("").split(" ");
let len = b.length
let repeated = {};

for(var i=0; i<len; i++) {
    let word = b[i]
    if(repeated[word] == undefined) {
        repeated[word] = 1
    }
    else {
        repeated[word]++
    }
}

for (let word in repeated) {
    if(repeated[word]>1){
        console.log(word)
    }
}
console.log(a.join("").length)
