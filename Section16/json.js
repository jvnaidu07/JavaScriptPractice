// JSON JavaScript object notation
//all key values wrapped up in "";
//no functions allowed in the values in the JSON 
//example:


[
{
    "firstName": "venkat",
    "lastName": "naidu"
}
]

// JSON Path

var branches = {
    "name": "university",
    "listOfBranches": [
        {
            "branchName": "ece",
            "studying" : "yes",
            "year": "1",
            "passOrFail": "don't know"
        },
        {
            "branchName": "cse",
            "studying" : "yes",
            "year": "2",
            "passOrFail": "don't know"
        },
        {
            "branchName": "eee",
            "studying" : "yes",
            "year": "3",
            "passOrFail": "don't know"
        },
        {
            "branchName": "civil",
            "studying" : "yes",
            "year": "4",
            "passOrFail": "don't know"
        }
    ]
}
console.log(branches.listOfBranches[0].branchName)
console.log(branches.listOfBranches[1].branchName)
console.log(branches.listOfBranches[2].branchName)
console.log(branches.listOfBranches[3].branchName)

