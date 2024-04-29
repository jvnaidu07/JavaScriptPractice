/// <reference types = "Cypress"/> 

import iterationLocators from "./locatorStore.cy";

describe("automation store website", () => {


    const Obj = {
        addToCart: "Add to Cart",
        productName: "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15{enter}"
    }

    const getProduct = new iterationLocators();
    it("", () => {
        cy.visit(Cypress.env("automationStore"));
        getProduct.serachProduct().first().type(Obj.productName)
        cy.contains("Add to Cart").should('contain', `${Obj.addToCart}`).click();
        getProduct.getProName().should('have.text', Obj.productName.replace("{enter}", ""))
    })
    it("", () => {
        cy.visit(Cypress.env("automationStore"));
        cy.get(".nav-pills.categorymenu a").then(($el) => {
            const text = $el.text('Home');
            cy.wrap(text).realHover().should('have.length.above', 4)

        })

    });
    it("", () => {
        cy.visit(Cypress.env("automationStore"));
        cy.get(".nav-pills.categorymenu a").then(($el) => {
            const text = $el.text();
            cy.get(".fa.fa-user").should('have.length', 4)
            cy.get(".subcategories li a").should('have.length',23)


        })

    })
    it.only("", () => {
        cy.visit(Cypress.env("automationStore"));
        cy.contains('Home').realHover()

    })

});