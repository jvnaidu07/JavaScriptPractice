function add() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = [1, 2, 3, 4, 5]
            let len = a.length;
            let sumOfAr = 0;

            for (var i = 0; i < len; i++) {
                sumOfAr += a[i]
            }
            resolve(sumOfAr);
            reject(sumOfAr)
        }, 15000);
    });
}

return add().then((val) =>{console.log(val)});