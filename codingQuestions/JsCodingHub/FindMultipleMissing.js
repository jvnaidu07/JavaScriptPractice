let arr = [1,2,3,7,8,0]
let n = 10;

/*
obj = { obj[num] = num mean
    5:5,
    1:1,
    3:3
}

*/
let obj = {};
let missing = [];

for (num of arr) {
    obj[num] = num;
}

for (var i=0; i<=n; i++) {
    if(obj[i] == undefined) {
        missing.push(i)
    }
}

console.log(missing);