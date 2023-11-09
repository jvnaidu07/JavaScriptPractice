/// <reference types = 'cypress'/>
const neatCSV = require('neat-csv')

import practices from "./selector.cy";
context("practice auto complete scenario", () => {
    let table;
    beforeEach(()=>{
        cy.fixture('registerPage').then(neatCSV)
        .then(data =>{
            table = data;

        }).then(console.table)
    })

    const credentials = new practices();

    it("login page", () => {

        cy.visit(Cypress.env("loginPage"));
        credentials.enterAdminCredentials(1).type(table[0]['firstName']).should('have.value', 'venkat');
        credentials.enterAdminCredentials(2).type(table[0]['lastName']).should('have.value', 'naidu')
    });
    it.only("register page", () => {

        cy.visit(Cypress.env("registerPage"));
        credentials.lengthOfTheElements().should('have.length', 13);
        credentials.lengthOfTheElements().should('have.length.be.greaterThan', 12);

        credentials.enterAdminCredentials(1).type(table[1]['firstName']).should('have.value', table[1]['firstName'])
        credentials.enterAdminCredentials(2).type(table[1]['lastName']).should('have.value', table[1]['lastName'])
        credentials.enterAdminCredentials(3).type(table[0]['phone']).should('have.value', table[0]['phone'])
        credentials.enterAdminCredentials(4).type(table[0]['email']).should('have.value', table[0]['email'])
        credentials.enterAdminCredentials(5).type(table[0]['address']).should('have.value', table[0]['address'])
        credentials.enterAdminCredentials(6).type(table[0]['city']).should('have.value', table[0]['city'])
        credentials.enterAdminCredentials(7).type(table[0]['state']).should('have.value', table[0]['state'])
        credentials.enterAdminCredentials(8).type(table[0]['postalCode']).should('have.value', table[0]['postalCode'])
        credentials.enterAdminCredentials(9).type(table[1]['userName']).should('have.value', table[1]['userName'])
        credentials.enterAdminCredentials(10).type(table[1]['password']).should('have.value', table[1]['password'])
        credentials.enterAdminCredentials(11).type(table[1]['confirmPassword']).should('have.value', table[1]['confirmPassword'])

    })
})
