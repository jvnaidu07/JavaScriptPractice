// creating objects
var obj = {
    firstName: "jason",
    lastName: "javascript",
    favColor: "white"
}

var result = delete obj.favColor
console.log(result)

// anothe rexample
var person = {
    firstName: "jason",
    lastName: "javascript",
    myProperties: function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}
person.myProperties()

var person1 = {
    firstName: "jason",
    lastName: "javascript",
    myProperties(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}
person1.myProperties()

