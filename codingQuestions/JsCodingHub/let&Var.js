let str = "string";

function diffLet() {

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log(i); -> here we will get error because it will work only inside the block not outside block
}

diffLet();

function diffVar() {

    for (var i = 0; i < 5; i++) {
        //console.log(i);
    }
    console.log(i); //-> here var variable work anywhere throught the function
}

diffVar();




//let -> block-scope
//var -> throught function