/// <reference types = "cypress"/>

import practices from "../e2e/selector.cy"
const neatCSV = require('neat-csv');

describe("read data from csv", ()=>{
    let table;
    let table1;
    before(()=>{
        cy.fixture("csvfile").then(neatCSV) // convert csv file into an object and here we can use cy.readfile as well
        .then(data =>{
            table = data;

        }).then(console.table)
    })
    beforeEach(()=>{
        cy.fixture('csvfile1').then(neatCSV)
        .then(data =>{
            table1 = data;
        })
    })
    it.skip("get the data from xl", ()=>{
        const randomRow = Math.floor(Math.random() * table.length)
        cy.visit("http://online.myschoolerp.com/Login.aspx")
        cy.get("#txtUserID").type(table[0]['username'])
        cy.get("#txtPWD").type(table[0]['password'])
    })
    const fillText = new practices();
    it.skip("fill the text using csv file", ()=>{
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.url().should('include', 'php')
        cy.url().should('contain', 'register.php')
        fillText.enterValues(1).type(table1[0]['firstName']).should('have.value', 'Venkateswara')
        fillText.enterValues(2).type(table1[0]['lastName']).should('have.value', 'Naidu')
        fillText.enterValues(3).type(table1[0]['phone']).should('have.value', '8897134081')
        fillText.enterValues(4).type(table1[0]['email']).should('have.value', 'jupallevenkat@gmail.com')
        fillText.enterValues(5).type(table1[0]['address']).should('have.value', 'Mellacheruvu')
        fillText.enterValues(6).type(table1[0]['city']).should('have.value', 'Piler')
        fillText.enterValues(7).type(table1[0]['state']).should('have.value', 'Andhra Pradesh')
        fillText.enterValues(8).type(table1[0]['postalCode']).should('have.value', '517214')
        fillText.enterValues(9).type(table1[0]['userName']).should('have.value', 'Venkateswara')
        fillText.enterValues(10).type(table1[0]['password']).should('have.value', 'S1.s1.s1')
        fillText.enterValues(11).type(table1[0]['confirmPassword']).should('have.value', 'S1.s1.s1')
    })
})