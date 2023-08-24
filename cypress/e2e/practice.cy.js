/// <reference types = "cypress"/>

const neatCsv = require("neat-csv");
import practices from "./selector.cy";
describe("to practice csv file to read", ()=>{

    let table;
    before(()=>{
        cy.fixture('csvfile11').then(neatCsv)
        .then(data =>{
            table = data;
        }).then(console.table)
    })

    const fillText = new practices();
    it ("read csv file", ()=>{
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.url().should('include', 'php')
        cy.url().should('contain', 'register.php')
        fillText.enterValues(1).type(table[1]['firstName']).should('have.value', 'akanksha')
        fillText.enterValues(2).type(table[0]['lastName']).should('have.value', 'Naidu')
        fillText.enterValues(3).type(table[0]['phone']).should('have.value', '8897134081')
        fillText.enterValues(4).type(table[1]['email']).should('have.value', 'akreddy@gmail.com')
        fillText.enterValues(5).type(table[1]['address']).should('have.value', 'piler')
        fillText.enterValues(6).type(table[0]['city']).should('have.value', 'Piler')
        fillText.enterValues(7).type(table[0]['state']).should('have.value', 'Andhra Pradesh')
        fillText.enterValues(8).type(table[0]['postalCode']).should('have.value', '517214')
        fillText.enterValues(9).type(table[1]['userName']).should('have.value', 'ak')
        fillText.enterValues(10).type(table[0]['password']).should('have.value', 'S1.s1.s1')
        fillText.enterValues(11).type(table[0]['confirmPassword']).should('have.value', 'S1.s1.s1')

    })
})
