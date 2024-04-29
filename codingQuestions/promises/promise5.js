//remove zero's

async function removeZero() {
    await setTimeout(() =>{
        let num = 120003300020200020;
        let str = num.toString();
        let arr = str.split("").map(Number);
        let res = arr.filter((n) => n != 0);
        let ress = new Set(res)
        console.log(ress)
    },10000);
}
removeZero(val => {console.log(val)})

function removeEle() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let num = 120003300020200020;
            let str = num.toString();
            let arr = str.split("").map(Number);
            let res = arr.filter((n) => n != 0);
            let ress = new Set(res);
            resolve(ress);
            reject(ress)
    });
        
    })
}
removeEle().then(val => {console.log(val)})
