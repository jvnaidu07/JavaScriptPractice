var i=0; 
do {
    console.log(i)
    i++;
} while (i < 5)


// for / do /do while
var answer = prompt("are you happy")
if(answer == "YES"){
    console.log("u r happy")
}else {
    console.log("u r not happy")
}



var answer;
var areYouhappy = true;
while(areYouhappy) {
    var answer = prompt("Are you happy?")
    if(answer == "yes"){
        console.log("You are happy")
        break;
    }
    else {
        areYouhappy = false
        console.log("You are not happy")
    }
}




var i=0;
do {
    console.log(i)
    i++;
}while (i<5)