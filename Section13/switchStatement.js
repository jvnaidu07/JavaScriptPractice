//switch statements

var favFood = "chicken";

if(favFood == "pasta"){
    console.log("pasta")
}
else if (favFood == "pizza"){
    console.log("pizza")
}
else {
    console.log(favFood)
}


var favFoods = "pizza"

switch(favFoods){
    case "pizza!" :
        console.log("pizza")
        break;
    case "pasta" :
        console.log("pasta")
        break;
    default :
        console.log(favFoods)        
        break;
}


var favColor = "white";

switch(favColor) {
    case "red" :
        console.log("red")
        break;
    case "blue" :
        console.log("blue")
        break;
    default :
        console.log(favColor)  
        break;      
}