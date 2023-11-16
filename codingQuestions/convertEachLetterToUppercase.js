const str = 'i have learned something new today';

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);

// another example
var str1 = 'i have learned something new today';
var arrr = str.split(' ')

for (var i=0 ;i<arrr.length; i++) {
    arrr[i] = arrr[i].charAt(0).toUpperCase() + arrr[i].slice(1)
}
var str3 = arrr.join(" ")
console.log(str3)







