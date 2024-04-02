function summ() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            let sum = 0;

            for (var i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            

            resolve(sum);
            reject(sum);

        },1000);
    });
}
summ().then((val) =>{console.log(val)});

//find even and odd numbers using promises
function add () {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        let int = 100;
        for (var i=0; i<int; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
        resolve(i);
        }, 6000);
    });
}
add().then((val)=> console.log(val));
// find average in an array
function average () {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let arr = [2,3,4,5,32,11,2,3,44]
            let len = arr.length;
            let sum = 0;

            for (var i=0; i<len; i++) {
                sum += arr[i]
            }

            let res = sum / len;
            resolve(res);
            reject(res);
        }, 3000);
    })
}
average().then((val) => {console.log(val)});

