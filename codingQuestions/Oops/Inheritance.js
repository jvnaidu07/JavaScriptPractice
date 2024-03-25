// we can extend parent class in child class - we can get parent properties in child class by using a keyword called extend
// when one object get acces to the properties and methods from another object is called inheritance 
// in other words we can inherent properties and methods from another class

class firstClass {
    name() {
        console.log('this is first class');
    }
}
class secondClass extends firstClass{
    age() {
        console.log('this is secondclass');
    }
}
class thirdClass extends secondClass {
    gender() {
        console.log('this is third class');
    }
}

const class1 = new firstClass()
console.log(class1.name());

const class2 = new secondClass()
console.log(class2.age());

const class3 = new thirdClass()
console.log(class3.gender());


//parent class
class Person {
    constructor(name) {
        this.name = name;
    }
}

//inheriting parent class

class Student extends Person{

}
let student1 = new Student('jack')
console.log(student1);



//another example
class Person1 {
    constructor(name,birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.occupation = 'unemployment';
    }
}

class Child extends Person1 {
    constructor(name,birthYear) { //we can override the method
        super(name,birthYear);
        this.occupation = 'student' //overriding an occupation property
        this.gneder = 'Female'
    }
}
let p = new Child('Merry', 1999);
console.log(p);