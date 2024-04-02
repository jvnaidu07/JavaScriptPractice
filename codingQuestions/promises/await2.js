async function add() {      // async function
    await setTimeout(() => {
        let int = 35876454;
        let str = int.toString();
        let arr = str.split("")
        console.log(arr);
        
    });
}


function mul(num1, num2) {  // normal function
x = num1*num2
return x;
}

function div(num1, num2) {  // normal function
x = num1/num2
return x;
}
// here we have 3 functions 1 async function and 2 normal functions - async will pause untill it get resolved (first normal functions will execute)

console.log(add());
console.log(mul(9,9));
console.log(div(10,100));