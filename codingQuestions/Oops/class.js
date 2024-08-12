// class in JS it allows us to create blueprint and based on blue print, we instantiate objects

// there are two types of classes in JS
// 1 is class declaration and another one is class expression

class Person { // class declaration - inside the class we can create constructors and many methods
    constructor(name, gender, birthYear) {
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;

        this.calAge = function () {
            console.log(new Date().getFullYear() - this.birthYear)
        }
    }
}

let result = new Person('Steve', 'Male', 1999);
result.calAge();
console.log(result);

















// let Person = class { // class expression

// }