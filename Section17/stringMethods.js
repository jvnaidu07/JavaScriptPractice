// string methods
var str = "hellouythgrf"
var result = str.length
console.log(result)

if(result > 6) {
    console.log("correct password")
}
else {
    console.log("incorrect password")
}

//using idexof and searching

var str1 = "this is javascript";

// indexOf will start from first occurrence string
var res = str1.indexOf("javascript")
console.log(res)
// using last occurence of string
var des = "edc erwf last"
var ress = des.lastIndexOf("last")
console.log(ress)

// using slice or substring or sub str
var sr = "this is javascript";
var sl = sr.slice(5, 8)
console.log(sl)
