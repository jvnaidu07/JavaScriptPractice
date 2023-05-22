//setters set property inside the object

var obj = {
    firstName: "json",
    lastName: "javascript",
    get myName() {
        return this.firstName + ' ' + this.lastName
    },
    set myName(value) {
        var name = value.split(" ")
        this.firstName = name[0]
        this.lastName = name[1]        
    }
}
console.log(obj.myName = "jon cena")

var person = {
    favColor : "white",
    favFood: "chicken",
    get myFood() {
        return this.favColor + ' ' + this.favFood
    },
    set myFood(value) {
        var name = value.split(" ")
        this.favColor = name[0]
        this.favFood = name[1]        
    }
}
console.log(myFood = "joe biden")



var myName = {
    n1: "asdd",
    n2:"asd",
    n3: "wed",
    get names () {
        return this.n1+this.n2+this.n3
    },
    set names(value) {
        var name = value.split(" ")
        this.n1 = name[0]
        this.n2 = name[1]
        this.n3 = name[2]
    }
}
console.log(names = "eqw eqqw qdwq")