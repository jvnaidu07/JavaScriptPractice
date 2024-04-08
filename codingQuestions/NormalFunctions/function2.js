function getSecondMax(arr) {
    let len = arr.length
    let max = -Infinity
    let smax = -Infinity

    for (var i = 0; i < len; i++) {
        max = Math.max(max, arr[i])
    }

    for (var i = 0; i < len; i++) {
        if (arr[i] < max) {
            smax = Math.max(smax, arr[i])
        }
    }
    return smax;
}
console.log(getSecondMax([1, 4, 5, 6, 7, 4, 3]));