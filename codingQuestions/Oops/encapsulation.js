// it is defined as binding the data with the code and the data under single unit/entity
// wrapping up of data under single unit is called encapsulation

class Student {
    constructor() {
        let name,marks;
    }

    getName() {
        return this.name;   // this is the keyword to represent class
    }
    setName(name) {
        this.name = name;
    }

    getMarks() { //getter
        return this.marks;
    }
    setMarks(marks) {   //setter
        this.marks = marks;
    }

}

let stu = new Student(); //cteating object for Student class

stu.setName('john');
stu.setMarks(85);

console.log(stu.getName(), stu.getMarks());


//another example

class typesOfTea {
    constructor() {
        let tea,gingerTea,greenTea,lemonTea;
    }
    getTea() {
        return this.tea;
    }
    setTea(tea) {
        this.tea = tea;
    }

    getgingerTea() {
        return this.gingerTea;
    }
    setGinger(gingerTea) {
        this.gingerTea = gingerTea;
    }

    getGreen() {
        return this.greenTea;
    }
    setGreen(greenTea) {
        this.greenTea = greenTea;
    }

    getLemon() {
        return this.lemonTea;
    }
    setLemon(lemonTea) {
        this.lemonTea = lemonTea;
    }
}
let result = new typesOfTea();
result.setTea('milkTea')
result.setGinger('ginger')
result.setGreen('greenTea')
result.setLemon('lemon')

console.log(result.getTea(),result.getgingerTea(),result.getGreen(),result.getLemon());
