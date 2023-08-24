// remover elements from an array
var arr = [1,2,3,4,5,5,6,7,8]
arr.splice(0,2)
console.log(arr)

// remove repeated element from an array

let str = ["q","b","b","r","b","c"]
let res = str.filter(val => val != 'b')
console.log(res)
let ar = ["b", "a", "c", "e", "t", "y", "i", "y", "t", "b", "a"]
let lenn = ar.length
let uniq = [];

for (var i=0; i<lenn; i++) {
    if (uniq.indexOf(ar[i]) === -1) {
        uniq.push(ar[i])
    }
}
console.log(uniq)

// print only learning from string
let s1 = "this is javascript and i am lerning";
let ar1 = s1.split(" ")
// here remove javascript
let result = ar1.filter(v => v != 'javascript')
console.log(result)

let newAr = [];
for (let i of ar1) {
    newAr.push(i.length)
}

let sor = newAr.sort(function (a,b){
    return b-a;
});

let ress = ar1.filter((val) => val.length === sor[1])
console.log(ress)

//find length of an array without spaces
let a = ["this is javascript and i am learning"]
let len = a.join("").replace(/ /g, "").length
console.log(len)

let a1 = "this is javascript and i am learning"
let lnn = a1.length
console.log(lnn)

