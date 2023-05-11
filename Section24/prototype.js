// prototypes
//prototypes will add the properties into the constructor

var big = {
    firstName: "meow",
    lastName: "cat",
    myName() {
        console.log(this.firstName+ ' ' + this.lastName)
    }
}

function Myname(first, last) {
    this.firstName = first
    this.lastName = last
    this.mtName = function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}
Myname.prototype.favColor = "blue"

var big = new Myname("dog" ,"barking")
console.log(big)