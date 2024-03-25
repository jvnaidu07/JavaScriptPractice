// object example - inside object there is properties and methods

let person = {  //object
    name: "name", //syntax - property: "value"
    birthYear: "Year",
    gender: "gender",

    calculateAge() { //method
        return this.birthYear();
    }
}

let john = {
    name: "john",
    birthYear: 2020,
    gender: "Male",

    calculateAge() {
        return this.birthYear();
    }
}
let steve = {
    name: "steve",
    birthYear: 2021,
    gender: "Male",

    calculateAge() {
        return this.birthYear();
    }
}

let Marry = {
    name: "john",
    birthYear: 2022,
    gender: "Female",

    calculateAge() {
        return this.birthYear();
    }
}
// john,steve and marry are the instances of the person object - like blue print of the person object


