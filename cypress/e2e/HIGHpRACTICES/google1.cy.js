/// <reference types = "cypress"/>


import iterationLocators from "./locatorStore.cy";

const items =
    ["what is the day", "find flag", "where are you from", "basic questions", "cypress", "cypress.io", "advantages cypress"]


context("iterations on google search", () => {

    const getResults = new iterationLocators();
    it("practice iterations", () => {
        cy.visit("https://www.google.com/")
        items.forEach((el, index) => {
            getResults.searchElement().as('clearField').type(`${items[index]}`)

            getResults.searchresults().should('have.length.greaterThan', 4)

            if (items[index] == `${items[0]}`) {
                cy.wrap(el).should('have.length', 15)
            }

            cy.get("@clearField").clear();
        })

    })
    it("windows handle or handlew tabs", () => {
        cy.viewport(800, 540)

        cy.visit("https://www.encodedna.com/javascript/demo/open-new-window-using-javascript-method.htm")
        cy.get("input[onClick ='newTab()']").invoke('removeAttr', 'type').click()
    })
})

