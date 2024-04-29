//remove zero's

async function removeZero() {
    let num = 120003300020200020;
    let str = num.toString();
    let arr = str.split("").map(Number);
    let res = await arr.filter((n) => n != 0)
    return res;
}
removeZero(val => {console.log(val)})


