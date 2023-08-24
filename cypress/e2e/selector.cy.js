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
}
export default practices