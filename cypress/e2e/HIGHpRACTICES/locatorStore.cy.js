class iterationLocators {
    searchElement() {
        return cy.get(".SDkEP #APjFqb")
    }
    searchresults() {
        return cy.get(".OBMEnb .G43f7e li", {timeout: 6000})
    }
    serachProduct() {
        return cy.get("#filter_keyword")
    }
    getProName() {
        return cy.get(".align_left a");
    }
}
export default iterationLocators