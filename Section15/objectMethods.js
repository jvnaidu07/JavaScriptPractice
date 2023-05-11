// creating object methods

var war = {
    nameOfTheWar: "ukraineVsRussia",
    warAuthor: "NATO",
    warMembers: ["america", "uk", "germany", "france", "allWesternCountries", "etc..."],
    presentVictm: "zelansky",
    nextVictim: "finland",
    natoCountries: function() {
        console.log("all r part of this war:" + ' ' + this.warMembers, this.warAuthor)
    }
}
war.natoCountries();
