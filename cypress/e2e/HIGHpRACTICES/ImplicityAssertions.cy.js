///<reference types = "cypress"/>

describe("implicity assertions using animation website", () => {
    it("", () => {
        //cy.viewport(1200, 800);
        cy.visit("https://webflow.com/made-in-webflow/website/Diagonal-Snap-Scroll")
        cy.get(".content",{timeout:60000}).first().should("have.class", "content")
    })
});