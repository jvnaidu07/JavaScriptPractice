let ar = ["a","u","o","e","i",1,2,3,4,5,6,7,8]
let res = ar.sort((a,b)=>{
    return a-b; //b-a: descending order, a-b ascending order
});
console.log(ar.sort());

let ar1 = [1,1,2,3,2,4,5,10,4,2,3,4,5,6,6];
let sort = ar1.sort(function(a,b) {
    return a-b;
})
console.log(sort)