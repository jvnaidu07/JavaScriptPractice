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