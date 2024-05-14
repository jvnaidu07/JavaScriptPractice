async function sum(a,b) {
    await setTimeout(() =>{
        console.log(a+b)
    })
}

function summ() {
    return 5+6;
}

console.log(sum(10,58))
console.log(summ());




async function root(a,b) {
    await setTimeout(() =>{
        console.log(a**b)
    })
}
console.log(root(10,20))