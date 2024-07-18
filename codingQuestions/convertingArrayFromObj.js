// converting obj into array
//var let const

const employees ={
    boss :'maina',
    secretary :'venky',
    sales :'jim',
    accountant :'oscar',

};

const abc = Object.keys(employees);
const result = Object.entries(employees);

console.log(abc);
console.log(result);
console.log(employees.secretary);
