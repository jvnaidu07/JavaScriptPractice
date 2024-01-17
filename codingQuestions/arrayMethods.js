
// convert string from arrays
let arr = ["l", "a", "c", "v","b","f","g"]
let arrToString = arr.toString();
console.log(arrToString)

// convert array from string

let str = "i am learning javascript"
let strToArr = str.split(" ")
console.log(strToArr);

// concat = combine arrays together

let names = ["ramesh", "ram", "chandra", "gali", "str"]
let names1 = ["a","bee", "cee", "dee", "eee","fff"]

let combinetogather = names.concat(names1)
console.log(combinetogather);

//using splice delete some elements

let result = names1.splice(2,2)
let spreadResul = [...names1]
console.log(spreadResul);

let aa = ["ramesh", "ram", "chandra", "gali", "str"]
aa.splice(1,3, "hi")
console.log(aa);


//indexOf
let aa1 = ["ramesh", "ram", "chandra", "gali", "str", "ramesh", "ram"];

let index = aa1.indexOf("ram")
console.log(index);

// for each callback function
let aa2 = ["ramesh", "ram", "chandra", "gali", "str", "ramesh", "ram"];


let count = 0;
aa2.forEach(n =>{
    count++
});
console.log((count));

for (let i=0; i<aa2.length; i++) {
    console.log(aa2[i]);
}

// doubled array
let arr3 = [1,2,3,4,5,6,7,8,9]
let doubled = arr3.map(n => n*2) 
console.log((doubled));

// filter 
let filt = [
    {title: 'post1', name: "sarah"},
    {title: 'post2',name1: "mod"},
    {title: 'post3',name2: "tsoi"},
    {title: 'post4', name3: "smod"}
]

let res = filt.filter((p) => p.name === "sarah")

console.log(res);

//reduce 
let arr4 = [1,2,32,1,4,56,21,5]

let res2 = arr4.reduce((total, current) => total + current)

console.log(res2)