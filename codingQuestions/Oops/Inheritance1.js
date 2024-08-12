class calSum {
    sum () {
        let ar = [1,2,5,4,7,8];
        let len = ar.length;
        let sum = 0;
        
        for(var i=0; i<len; i++) {
            sum += ar[i]
        }
        console.log(sum)
    }
}

class average extends calSum {
    avg () {
        let ar = [1,2,5,4,7,8];
        let len = ar.length;
        let sum = 0;
        
        for(var i=0; i<len; i++) {
            sum += ar[i]
        }
        let res = sum / len;
        console.log(res);
    }
}
class doubleArr extends average {
    double() {
        let arr = [2,3,4];
        let dou = arr.map(n => n*2);
        console.log(dou)
    }
}

let firstResult = new calSum()
firstResult.sum();

let secondResult = new average()
secondResult.avg();
let thirdResult = new doubleArr();
thirdResult.double();
thirdResult.avg()