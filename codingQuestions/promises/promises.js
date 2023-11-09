// promises will return two things - one is resolve an another one is reject

// to create object for promises

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    }, 5000)
})
 
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject()

    },5000)
})
promise.then() //for promise fullfillment / for resolve
promise1.catch() // for reject
// promise functions
const fullfillment = (resolve) => {
    console.log(resolve);
    console.log('promise fullfilled'+ ' '+ resolve)

}

const reject = (reject) =>{
    console.log(reject);
    console.log('promise rejected'+ ' ' + reject)
}

let count = 1;

let countValue = new Promise(function(resolve, reject) {
    if(count){
        resolve('there is a value')
    }
    else {
        reject('there is no count value')
    }
});
console.log(countValue)


