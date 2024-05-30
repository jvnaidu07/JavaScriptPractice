/// <reference types = "cypress"/>




const validateBorderHeaders = (home, flights, hotels, carRentals, cruises, destinations, vacations, signOn, rigister, support, contact) => {
    cy.get("tbody tr .mouseOut").should("have.contain", home).as("flights")
    cy.get("@flights").should("contain.text", flights).as("hotels")
    cy.get("@hotels").should("contain.text", hotels).as("carRentals")
    cy.get("@carRentals").should("contain.text", carRentals).as("cruises")
    cy.get("@cruises").should("contain.text", cruises).as("destinations")
    cy.get("@destinations").should("contain.text", destinations).as("vacations")
    cy.get("@vacations").should("contain.text", vacations).as("signOn")
    cy.get("@signOn").should("contain.text", signOn).as("rigister")
    cy.get("@rigister").should("contain.text", rigister).as("support")
    cy.get("@support").should("contain.text", support).as("contact")
    cy.get("@contact").should("contain.text", contact)

}
describe("", () => {
    it("", () => {
        cy.visit(Cypress.env("registerPage"));
        cy.get("table").eq(1).within(() => {
            cy.get("tbody tr .mouseOut").should('have.length', 11);
            validateBorderHeaders('Home', "Flights", "Hotels", "Car Rentals", "Cruises", "Destinations", "Vacations", "SIGN-ON", "REGISTER", "SUPPORT", "CONTACT")
        })
    })
})

