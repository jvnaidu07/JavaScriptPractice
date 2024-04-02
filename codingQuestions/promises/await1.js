

async function add() {
    await new Promise(resolve => {
        setTimeout(() => {
            let int = 35876454;
            let str = int.toString();
            let arr = str.split("")
            console.log(arr);
            resolve();
        });

    })
}

function calc() {
    x = 5 - 7;
    return x;
}

console.log(add());
console.log(calc());

