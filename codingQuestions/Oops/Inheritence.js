class add{
    sum() {
        return 5+7;
    }
}
const res1 = new add();

class multiple extends add{
    multiple() {
        return res1.sum()*2;
    }
}

const res2 = new multiple();


class div extends multiple{
    div() {
        return res2.multiple()/2
    }
}

const res3 = new div();

console.log(res1.sum());
console.log(res2.multiple());
console.log(res3.div());

// console.log(res1.sum());
// console.log(res2.sum()*2);
// console.log(res3.multiple()/2);
