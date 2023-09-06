let str = 'venkat naidu';
str = str.replace(" ", "")
let copy = '';
let len = str.length;

for (var i=0; i<len; i++) {
    copy += str[i]
}
console.log(copy)