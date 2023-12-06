let ar = [1,2,3,4,5,6,"a","b","c","d","e","f"]


for (var i=0; i<ar.length; i++) {
    if (typeof(ar[i]) === 'string') {
        console.log(ar[i]);
    }

    if (typeof(ar[i]) === 'number') {
        console.log(ar[i]);
    }
   
}
