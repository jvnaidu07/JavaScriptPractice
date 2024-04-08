
async function calc() {
    x = 5 + 5;
    return x;
}

async function calc2() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            x = 5 + 6;
            console.log(x);
            resolve();
            reject();
        }, );

    });

}

async function calc3() {
    await setTimeout(() =>{
        x = 5+7;
        console.log(x)
    },5000)
}

console.log(calc());
console.log(calc2());
console.log(calc3());