let arrstr = ["1","2","3","4","5","6"]
let result = arrstr.map(Number)
console.log(result);

let int = "1,2,3,4,5,6,7,8,9";
let str = int.toString()
let arr = str.split(",").map(Number)

let b = arr.length;
let sum = arr[0];
for (var i=0; i<b; i++) {
    sum+=arr[i]
}
console.log(sum)

let str2 = "1,2,3,4,5,6,7,8,9,65,4,2,1,0,2";
let str1 = str.toString();
let r1 = str1.split(",").map(Number)
console.log(r1);

let int3 = 6541655;
let str3 = int.toString();
let arr3 = str.split(",")
console.log(arr3);