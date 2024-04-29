let json =
{
    "language": "JS",
    "ver": 10.9,
    languages:
        [
            {
                "language1": "python",
                "version": 3.2
            },
            {
                "language2": "c++",
                "version": 5.2
            }

        ]
}
console.log(json.language);
console.log(json.languages[0]);
console.log(json.languages[1]);

let json1 =
{
    "mango": "Mango",
    "apple": "Apple",
    crops:
        [
            {
                "rabi": "Rabi",
                "karif": "Karif"
            },
            {
                "season": "Season Summer",
                "winter": "Winter Season"
            }

        ],

    "quit": "Quit Program"
}


console.log(json1.mango);
console.log(json1.crops[0]);
console.log(json1.crops[0].rabi);
console.log(json1.crops[0].karif);
console.log(json1.crops[1].season);

let json3 =
{
    "language": "JS",
    "ver": 10.9,
    languages:

        [
            {
                "language1": "python",
                "version": 3.2
            },
            {
                "language2": "c++",
                "version": 5.2
            }

        ]
}
let json2 =
{
    "language": "JS",
    "ver": 10.9,
    branch:
        [
            {
                "civil": "CIVIL",
                "mech": "MECHANICAL"
            },
            {
                "ece": "EcE",
                "eee": "EEE"
            }

        ]
}

console.log(json2.language);
console.log(json2.branch[0]);
console.log(json2.branch[0].civil);
console.log(json2.branch[0].mech);
console.log(json2.branch[1].ece);