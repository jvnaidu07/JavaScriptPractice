//polymorphism - poly means different forms - we can write same name but different paramters


function addNumbers(x, y) { // here x and y are the parameters
    return x + y;
}

function addNumbers(x, y, z) { // here x, y and z are the parameters
    return x + y + z;
}
function addNumbers(a, b, c, d) {
    return a + b + c * d;
}

console.log(addNumbers(10,20,14, 122));

//another example with inheritence using same method
//We create different classes with the same method name and different definitions of methods. 
//This example shows us the same method will perform different operations depending on the object upon which it is called.
class firstClass {
    add () {
        console.log("this is first class");
    }
}
class secondClass extends firstClass {
    add () {
        console.log(20+30);
    }
}
class thirdclass extends secondClass {
    add () {
        console.log("this is last method");
    }
}

let obj1 = new firstClass();
let obj2 = new secondClass();
let obj3 = new thirdclass();

console.log(obj1.add());
console.log(obj2.add());
console.log(obj3.add());
