// there are three types of alerts - alert box - confirm box - prompt box

//alert - Ok - confirm box -Ok/Cancel - prompt - asking for credentials
alert("hello")


// confirm

if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }

  //prompt box

  if(prompt("enter userName")) {
    txt = 'user';
  }
  else {
    txt = "cancel"
  }



