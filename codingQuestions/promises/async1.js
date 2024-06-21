


async function calc() {
    x = await 5 + 5;
    console.log(x)
}
console.log(calc());


function rev() {    // normal function
    let str = "JavaScript";
    let len = str.length;
    let rev = '';

    for (var i=len-1; i>=0; i--) {
        rev+=str[i]
    }
    return rev;
    
}
console.log(rev());


function rev(str) {
    let len = str.length;
    let rev = '';
    
    for (let i=len-1; i>=0; i--) {
        rev += str[i]
    }
    return rev;
}

console.log(rev('java'))

function max() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let arr = [3,4,2,3,9,7,6,5,4];
            let len = arr.length;
            let max = arr[0];

            for (var i=0; i<len; i++) {
                if (max < arr[i]) {
                    max = arr[i]
                }
            }
            console.log(max);
            resolve(max);
            
        },1000);
    })
}
console.log(max());
