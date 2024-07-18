function average(arr) {
    
    let len = arr.length;
    let sum = 0;
    
    
    for (var i=0; i<len; i++) {
        sum += arr[i]
    }
    let avg = sum / len;
    return avg;
}

console.log(average([1,2,3,5,78]))