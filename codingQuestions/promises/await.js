
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
    x = 5 + 7;
    return x;
}

console.log(calc());
console.log(calc2());
console.log(calc3());