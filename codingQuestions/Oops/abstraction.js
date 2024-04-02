// abstraction is hiding implimentation details to the user and showing only functionality

function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000;
    let basicInfo = 'abstaraction'      //this is private variable - can not access outside function


    this.calFinalSalary = function () {
        let finalsala = this.baseSalary + this.monthlyBonus;
        console.log(finalsala);
    }
    this.EmpDetails = function() {
        console.log('name:'+name+ ', ' +'age:'+ age+ ', '+ 'basicSalary:' +baseSalary);
    }
    console.log(basicInfo);
}

let result = new Employee('john', 29, 3000);
console.log(result);
result.calFinalSalary();
result.EmpDetails();



