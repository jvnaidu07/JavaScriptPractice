//synchronous means it will execute one thing at a time
//asynchronous means it will execute multiple things at a time

// function settimeout() {
//     settimeout(() => {
//         console.log('print this result at last')
//     }, 5000)
// }
// console.log('javascript')
setTimeout(() => {

    let sum = 0;
    for (var i = 0; i < 9; i++) {
        sum += i;
    }
    console.log('print sum value after 10 seconds' + ' ' + sum)
}, 10000)


setTimeout(() => {
    console.log('print value after 5 seconds')
}, 5000)

// callback functions
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(5,5))
