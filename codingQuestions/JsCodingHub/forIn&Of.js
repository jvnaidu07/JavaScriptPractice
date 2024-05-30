let obj = 
{
    id: "12345",
    forIn: "forIn",
    forOf: "forOf"

};


console.log(obj.forIn.toUpperCase());
// for in it will start from o'th index - normally used of objects
for (var str in obj) {
    console.log(str.toUpperCase());
}

//for off - it will get same index as it is from arrays
let arr = [1,3,2]

for(var str1 of arr){
    console.log(str1);
}

for(var str1 in arr){
    console.log(str1);
}
