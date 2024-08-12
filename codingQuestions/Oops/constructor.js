// a constructor function is a function which we can create several objects using blueprint
// constructor function is a pattern in javascript on which we can create several objects
//here Person is the blueprint


//A constructor is a special function that creates and initializes an object instance of a class

let Person = function(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear; // this object will create empty object - like this.john = john
    this.calAge = function() {
        let age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
}

let john = new Person('john', 'male', 1992);
john.calAge()
console.log(john);

let steve = new Person('steve', 'male', 1999)
steve.calAge()
console.log(steve);


















// to get todays date
const date = new Date();
console.log(date);
// to get present month
const month = new Date().getMonth()+1 // +1 - actually it is going to start with index 0 - thats why we included with +1
console.log(month);
// to get present year
let year = new Date().getFullYear();
console.log(year);
