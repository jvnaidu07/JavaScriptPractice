// creating objects
//inside the objects those things we need to call it as properties

let obj = {
    name: "venkat",
    favNumber:3,
    isItTrue: true,
    colors: ["white, blue", "red", "black"],
    objectss: 
    {
        phone: "yes",
        mobileNumber: 68517
    }
}
console.log(obj.isItTrue)

//Activity: family tree

var family = {
    family: {
        firstName: "ak",
        lastName: "reddy",
        isfrnd: "yes"
    },
    family2: {
        firstName: "venkat",
        lastName: "naidu",
        isAlive: true
    },
    family3: [
        {
            firstName: "venkataramana",
            lastName: "naidu",
            isAlive: true
        }
    ],
    family4: [
        {
            firstName: "venkataramana",
            lastName: "naidu",
            isAlive: true
        }
    ],
    isRich: true
}
console.log(family.family.lastName)