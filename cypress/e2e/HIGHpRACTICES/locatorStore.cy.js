class iterationLocators {
    searchElement() {
        return cy.get(".SDkEP #APjFqb")
    }
    searchresults() {
        return cy.get(".OBMEnb .G43f7e li", {timeout: 6000})
    }
}
export default iterationLocators