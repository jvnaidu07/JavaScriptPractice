//alerts in javascript
//there are three types in JS alert box, confirm, prompt

//Ok
alert("hello world");

//Ok/Cancel
if(confirm("press ok button")) {
    txt= "i am pressing the ok button"
}
else {
    txt = "you just clicked on cancel button"
}


//it is going to ask credentials

if(prompt("Enter userName")) {
    txt = "i am entering username"
}
else {
    txt = "your not entered username"
}
