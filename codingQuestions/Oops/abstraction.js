// abstraction is hiding implimentation details to the user and showing only functionality

function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000;



    this.calFinalSalary = function () {
        let finalsala = this.baseSalary + this.monthlyBonus;
        console.log(finalsala);
    }
}

let result = new Employee('john', 29, 3000);
console.log(result);
result.calFinalSalary();



