// constructor
// blue print of an object

var me = {
    firstName: "bob",
    lastName: "bobi",
    myName() {
        console.log(this.firstName+ ' ' + this.lastName)
    }
}
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
var me = new Myname("venkat", "naidu")
console.log(me)

var big = new Myname("dog", "barking")
console.log(big)