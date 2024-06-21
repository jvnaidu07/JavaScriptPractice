let arr = ["mango", "orange", "apple", "grapes", "dragonFruit", "banana"]

let res = arr.forEach(n => {
    console.log(n.length);
});

let res1 = arr.forEach(n => {
    console.log(n.toUpperCase());
});

let res2 = arr.forEach(n => {
    console.log(n.toLowerCase());
});

function forEach(arr) {
    arr.forEach(v => {
        console.log(v.length);
    })
}

forEach(["mango", "orange", "apple", "grapes", "dragonFruit", "banana"])

const Obj = {   //this is called object
    mango: "mango", orange: "orange", apple: "apple", grapes: "grapes", dragon: "dragonFruit", banana: "banana"
}
let arrr = []
console.log(Obj.apple.length);
console.log(Obj.apple);
console.log(Obj);


//json examples

const json =
{
    "fruit1": "Mango",
    "fruit2": "Apple",
    "fruit3": "Orange",
    "fruit4": "Banana",
    seasons: 
    [
        "winter",
        "summer"
    ],
    crops: 
    [
        "rabi",
        "karif"
    ]


}
console.log(json);
console.log(json.fruit1);
console.log(json.fruit1.length);    
       
console.log(json.seasons);
console.log(json.seasons[0]);
console.log(json.seasons[1]);

console.log(json.crops);
console.log(json.crops.join(" "));
