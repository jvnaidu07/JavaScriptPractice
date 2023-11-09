//getter gets value as the property
//getting the property inside the object is called getters
var obj = {
    firstName: "json",
    lastName: "javascript",
    get myName() {
        return this.firstName + ' ' + this.lastName
    }
}
console.log(obj.myName)

var person = {
    firstName: "ak",
    lastName: "arava",
    get myName() {
        return this.firstName + ' ' + this.lastName
    }
}
console.log(person.myName)
let obj1 = {
    n : "akaa",
    n1: "wed",
    n2: "esf",
    get proper() {
        return this.n+ this.n1 + this.n2
    }
}
console.log(obj1.proper)