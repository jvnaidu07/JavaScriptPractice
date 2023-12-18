/// <reference types = "cypress"/>

describe("mouse hover", () => {

    it("navigate to automation store", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("#categorymenu > nav > ul > li:nth-child(2) > a").realHover('mouseover')

        cy.get("#categorymenu > nav > ul > li:nth-child(2) > a").click();
        cy.get(".fixed").first().click();
    })

    const items = 
    [
        "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals", "Womens high heel point toe stiletto sandals ankle strap court shoes",
        "Fiorella Purple Peep Toes", "Ruby Shoo Womens Jada T-Bar"
    ]
    it("mouse over ", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".nav-pills.categorymenu li").contains("Apparel & accessories", { timeout: 60000 }).realHover('mouse')
        cy.contains('Shoes').should('be.visible').click({ force: true })
        cy.contains('Shoes').click({ force: true })
        items.forEach(val =>{
            cy.get(".thumbnails.grid.row.list-inline div div .fixed a").contains(val).should('have.text', val)
        })
    })
})