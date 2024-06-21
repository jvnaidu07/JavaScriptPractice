class sum {
    add(a,b) {
        return a+b;
    }
    add1(a,b) {
        return a+b;
    }
}
class mul extends sum {
    add(a,b,c) {
        return a+b*c;
    }
}

class div extends mul {
    add(a,b,c,d) {
        return a+b+c/d;
    }
}
let res1 = new sum();
let res2 = new mul();
let res3 = new div();

console.log(res1.add(10,20))
console.log(res2.add(10,20,20))
console.log(res3.add(10,20,30,40))

console.log(res2.add1(10,20));
