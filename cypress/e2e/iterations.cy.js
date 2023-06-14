/// <reference types = "cypress" />

import { domColors } from "../fixtures/colorObj"

context("iterations using forEach", () => {

    const colors =
        [" rgb(246, 230, 194);", " rgb(255, 170, 207);", " rgb(234, 143, 234);", " rgb(185, 243, 228);"]

    it("navigate to colors using each", () => {
        cy.visit(Cypress.env("colorWebsite"))
        cy.get(".singleItem .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `background-color:${colors[index]}`)
        })
    })
    it("navigate to colors using forEach", () => {
        cy.visit(Cypress.env("colorWebsite"))
        cy.get(".singleItem .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `background-color:${colors[index]}`)
        })
    })
    const items = [];
    it("Challenging DOM", () => {
        cy.visit("http://the-internet.herokuapp.com/challenging_dom")
        cy.get("tr").each($el => {
            const message = $el.text()
            cy.log(message)
        })
        cy.get(".large-2.columns a").first().then($el => {
            const getText = $el.text()
            items.push($el.text())
            expect(getText).is.to.be.eq(items.join(" "))
        })
    })


    const DomElements = [];
    it("Challenging DOM", () => {
        cy.visit("http://the-internet.herokuapp.com/challenging_dom")
        cy.get("tr").each($el => {
            const message = $el.text()
            cy.log(message)
        })
        cy.get(".large-2.columns a").first().then($el => {
            const getText = $el.text()
            DomElements.push($el.text())
            cy.wrap(getText).should('eq', DomElements.join(" "))
            expect(getText).to.contain(DomElements.join(" "))
        })
        cy.get(".large-2.columns a").should('have.class', 'button')
    })

    const randomEle = {

        foo: 'foo', bar: 'bar', baz: 'baz', qux: 'qux'
    }

    it("Challenging DOM", () => {
        cy.visit("http://the-internet.herokuapp.com/challenging_dom")

        cy.get(".large-2.columns a").first().then($el => {
            const getText = $el.text();
            if (getText == randomEle.foo && randomEle.bar || randomEle.baz && randomEle.qux)
                cy.log(getText)

        })
    })
    it.only("navigate to colors using forEach", () => {
        cy.visit("https://colorhunt.co/palette/b9f3e4ea8feaffaacff6e6c2")
        cy.get(".singleItem .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `background-color:${domColors.colorItems3[index]}`)        
        })
    })
})
