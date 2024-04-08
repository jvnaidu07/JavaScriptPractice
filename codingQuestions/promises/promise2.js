

function rev() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = "JavaScript";
            let len = a.length;
            let rev = '';

            for (var i = len - 1; i >= 0; i--) {
                rev += a[i];
            }
            resolve(rev);

        }, 10000);

    })

}

function removeDuplicates() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = "JavaScript";
            let remDuplicate = new Set(a);

            resolve(remDuplicate);
        }, 5000);

    })


}
function add() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = [1, 2, 3, 4, 5]
            let len = a.length;
            let sumOfAr = a[0];

            for (var i = 0; i < len; i++) {
                sumOfAr += a[i]
            }
            resolve(sumOfAr);
            reject(sumOfAr)
        }, 15000);
    });

}

rev().then(rev => {console.log(rev); return removeDuplicates()})
    .then(remDuplicate => {console.log(remDuplicate); return add()})
    .then(value => {console.log(value)});
