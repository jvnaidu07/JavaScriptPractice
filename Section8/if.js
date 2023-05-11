// if and else statements
// == : equal to or lose equal to
// === : strictly equal to
//!= : not equal to
//!== : not equal
//< : less than, <= : less than equal to, >= : greater than equal to etc...



if (1==1) {
    console.log("true")
}


if (1=='1') {
    console.log("true")
}
else{
    console.log("false")
}
var num1 = 1;

if(num1 ===1){
    console.log("the numbers are the same")
}

if (num1 >2) {
    console.log("num1 is greater than 2")
}
else {
    console.log("num1 is not greater than 2")
}


var a = 10;
var b =20;

if (a>b) {
    console.log("a is greater than b")
}
else {
    console.log("b is th egreater number")
}




var aa = 100;
var bb = 200;
if (aa < bb) {
    console.log("true")
}
else {
    console.log("false")
}
let a1 = 100;
let b1 = 200;
let c1 = 300;

if(a1>b1 && a1>c1) {
    console.log("a1 is the greater number")
}
else if (b1>c1) {
    console.log("b1 is the greater number")
}
else {
    console.log(" c1 is the greater number")
}

let a2 = 100;
let b2 = 200;
let c2 = 300;

if(a2<b2 && a2<c2) {
    console.log("a1 is the minimum number")
}
else if (b2<c2) {
    console.log("b1 is the minimum number")
}
else {
    console.log(" c1 is the minimum number")
}



var myName = "steve"

if (myName == "Venkat") {
    console.log("my name is venkat")
}
else{
    console.log("hello" + ' '+ myName+ ' '+ "nice to meet u")

}


if(1==='1') {
    console.log("one is equal to one")
}
else if (1==2) {
    console.log("1 is equal to 2")
}
else{
    console.log("1 is not equal to two")
}

var str3 = prompt("what is your favourite fruit")

if (str3 == "apple") {
    console.log("apple is my favourite fruit")
}
else if (str3 == "banana") {
    console.log("banana is my favourite food too")
}
else if (str3 == "mango") {
    console.log("banana is my favourite food too")
}
else {
    console.log("this is not my favourite food")
}



// comparing multiple set of data using if statement

if(1==1 && 2==2){
    console.log("one or more true")
}


if (1==1 || 2==2) {
    console.log("one or more equal")
}

//Nested if statement

if(1==1) {
    if(2==2){
        console.log("both are same")
    }
    else{
        console.log("both are not same")
    }
}

var color = prompt("What is your favourite color")
var pickNum = prompt("pick numbers between 1 to 5");

if (color == "white" && pickNum == 3) {
    console.log("this is my favourite color and number")
}
else {
    console.log("you have chosen" + ' ' +color+ ' ' +"and" + ' ' + pickNum)
}


var color1 = prompt("What is your favourite color")
var pickNum1 = prompt("pick numbers between 1 to 5");

if (color1 == "white" || pickNum1 == 3) {
    console.log("Atleast one of those are matching")
}
else {
    console.log("both are not matching")
}
