class student {
    constructor() {
        let firstName, lastName;
    }
    getfirstName() {
        return this.firstName;
    }
    setfirstName(firstName) {
        this.firstName = firstName;
    }

    getlastName() {
        return this.lastName;
    }
    setlastName(lastName) {
        this.lastName = lastName;
    }
}

let result = new student();

result.setfirstName('john')
result.setlastName('cena')
console.log(result.getfirstName(), result.getlastName());
