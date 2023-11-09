const ar = [1,2,3,4,-7,8,-1,5,10]

const res = ar.filter(val => val>=5)

const result = res.map(n =>{
    const obj = {value: n}
    return obj
})

console.log(result)

function double(x) {
    return x * 2;
}
function triple (y) {
    return y*3;
}

let result1 = ar.map(double) 
console.log(result1)

let result2 = ar.map(triple)
console.log(result2)