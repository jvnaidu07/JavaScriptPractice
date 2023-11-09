//A constructor is a special function that creates and initializes an object instance of a class

function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary
}
e = new employee(101, "venkat", 200)
console.log(e.id + ' ' + e.name + ' ' + e.salary)

function Person() {
    this.firstName = 'venkat',
        this.lastName = 'naidu'
}
const person = new Person()
console.log(person.firstName + ' ' + person.lastName);

function Person1(first, last) {
    this.firstName = first,
        this.lastName = last
}
const person1 = new Person1("venkat", "naidu")
console.log(person1)

function Person2(firstNa, lastNa) {
    this.firstName = firstNa,
    this.lastName = lastNa,
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName
    }
}
const ee = new Person2('venkat', 'naidu');

console.log(ee.getFullName());