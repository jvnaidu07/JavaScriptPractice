Cypress.Commands.add("fillBgColors", () => {
    cy.get(".singleItem .palette div").each((el, index) => {
        cy.wrap(el).should('have.attr', `style`, `background-color:${domColors.colorItems3[index]}`)
    })

})