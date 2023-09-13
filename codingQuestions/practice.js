// compute maximum length of the string
let a = "this is javascript and i am learning";
let b =a.split(" ");
let newAr = [];

for (var i of b) {
    newAr.push(i.length)
}
let sor = newAr.sort(function (a,b){
    return b-a;
})
let result = b.filter((val)=> val.length === sor[0])
console.log(result.join(""))
console.log(sor[0])