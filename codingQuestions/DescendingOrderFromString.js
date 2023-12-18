let ar = ["a","u","o","e","i",1,2,3,4,5,6,7,8]
let res = ar.sort((a,b)=>{
    return a-b; //b-a: descending order, a-b ascending order
});
console.log(ar.sort());