let person = {
    name: 'john',
    gender: "male"
}
let convertArr = Object.entries(person)
let conAr = Object.keys(person);

console.log("   " +conAr);
console.log(convertArr);
console.log(convertArr[0]);
console.log(convertArr[0]);


//convertArrtoObj
let arrToobj = Object.fromEntries(convertArr)
console.log(arrToobj);