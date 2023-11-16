class practices{
    headers(index){
        return cy.get(".site-header.wp-block-template-part")
    }
    mouseHover() {
        return cy.get("#categorymenu > nav > ul > li:nth-child(2) > a")
    }
    enterValues(index) {
        return cy.get("tbody tr td input").eq(index)
    }
    fisrValue() {
        return this.enterValues(1)
    }
    selectIndia() {
        return cy.get("select[name='country']")
    }
    enterAdminCredentials(index) {
        return cy.get("tbody tr td input").eq(index)
    }
    lengthOfTheElements() {
        return cy.get("tbody tr td input")
    }
    dropdownvalue() {
        return cy.get('select')
    }
}
export default practices