// we can use await only in sync functions
let num =0;
async function increment () {
    num += await 1;
    console.log(num);
}

increment();
num += 1; // num = num +1 =1;
console.log(num);