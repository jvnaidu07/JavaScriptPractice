function max() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let arr = [7, 8, 6, 5, 4, 3, 5, 6, 8, 9]
            let len = arr.length;
            let max = arr[0];

            for (var i = 0; i < len; i++) {
                if (max < arr[i]) {
                    max = arr[i]
                }
                
            }
            resolve(max);
            reject(max)

        }, 5000);

    });
}


function min() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let arr = [7, 8, 6, 5, 4, 3, 5, 6, 8, 9]
            let len = arr.length;
            let min = arr[0];

            for (var i = 0; i < len; i++) {
                if (min > arr[i]) {
                    min = arr[i]
                }
                
            }
            resolve(min);
            reject(min);

        }, 5000);

    });
}

max().then((val) => { console.log(val) });
min().then((val) =>{console.log(val)});