let f = function(a,b) {
    if (arguments.length === f.length) {
        console.log('paramters is matching');
    }
    else {
        console.log('not matching');
    }
}
f(1)
f(1,8)

// write a function to determine whether the function is an integer
function isInt(num) {
    return (!isNaN(num) && parseInt(num) === num);
}
console.log(2,isInt(2));