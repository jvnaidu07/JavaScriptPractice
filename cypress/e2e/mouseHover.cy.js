/// <reference types = "cypress"/>

describe("mouse hover", () => {

    it.only("navigate to automation store", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("#categorymenu > nav > ul > li:nth-child(2) > a").realHover('mouseover')

        cy.get("#categorymenu > nav > ul > li:nth-child(2) > a").click();
        cy.get(".fixed").first().click();
    })
})