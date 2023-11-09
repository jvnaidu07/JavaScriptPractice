/*The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues*/
// await only valid for async functions - it will wait some amout of time untill it gets resolve


async function calculate () {
    console.log()
}
async function test() {
    x = await 5+7;
    return x;
}
console.log('hello world')

let result = test();
result.then((data)=>{
    setTimeout(()=>{    //set timeout will wait some amout of time 
        console.log(data)
    }, 5000)
})
result.catch((error) =>{
    console.log(error)
})
console.log(result)



function makeRequest(location) {
    return new Promise((resolve, reject) =>{
        console.log(`making request to${location}`)
        if (location === 'Google') {
            resolve('say hello to google')
        }
        else {
            reject('goodbye')
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) =>{
        console.log('processing response')
        resolve(`extra information + ${response}`)
    })
}
makeRequest('Google').then(response =>{
    console.log('response received')
    return processRequest(response)
}).then(processResponse =>{
    console.log(processResponse)
}).catch(err =>{
    console.log(err)
})


