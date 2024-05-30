/// <reference types = "Cypress"/>

const enterText =
    [{
        firstName: "john",
        lastname: "cena",
        phone: 123456789,
        email: "cena123@gmail.com",
        address: "fake city",
        city: "fake city",
        State: "fake state",
        postalCode: 517214,
        userName: "johncena",
        password: "cena",
        confirmPass: "cena"
    }]
Cypress.Commands.add("validateTextFields", (firstName, lastname, phone, email, address, city, State, postalCode, userName, password, confirmPass) => {


    cy.get("table tbody tr td input").eq(1).type(firstName).should('have.value', firstName)
    cy.get("table tbody tr td input").eq(2).type(lastname);
    cy.get("table tbody tr td input").eq(3).type(phone)
    cy.get("table tbody tr td input").eq(4).type(email)
    cy.get("table tbody tr td input").eq(5).type(address)
    cy.get("table tbody tr td input").eq(6).type(city)
    cy.get("table tbody tr td input").eq(7).type(State)
    cy.get("table tbody tr td input").eq(8).type(postalCode)
    cy.get("table tbody tr td input").eq(9).type(userName)
    cy.get("table tbody tr td input").eq(10).type(password)
    cy.get("table tbody tr td input").eq(11).type(confirmPass)
});
describe("", () => {
    it("", () => {
        cy.visit(Cypress.env("registerPage"), { timeout: 120000 });
        enterText.forEach((el, index) => {
            cy.validateTextFields(el.firstName, el.lastname, el.phone, el.email, el.address, el.city, el.State, el.postalCode, el.userName, el.password, el.confirmPass);

        })
    })
})
