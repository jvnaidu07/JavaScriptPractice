//parameters and Arguements

function message(message1, message2){

    console.log(message1)
    console.log(message2)
}
message("venkat", "learning javascript");

function rectangularArea(length, width) {
    var area = length*width
    return area;
}
console.log(rectangularArea( 10, 20))


// const 
const things = [1,2,3,4,5,6]
things[2] = 8
console.log(things)

var answer= prompt("You owe me $5.Please enter the amount you are paying.")

function cashier(amount){
    let newCost
    let cost =5
    newCost= cost - amount
    return newCost
}

if(cashier(answer) == 0) {
    console.log("u have the amount")
}
else if (cashier(answer) > 0) {
    console.log("u have amout which is less than 5")
}
else {
    console.log("u dont have money")
}

var numm = 45
console.log(45**45) // ** to the power