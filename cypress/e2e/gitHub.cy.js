/// <reference types = "cypress"/>
import gitHub from "./githubSelectors/gitHubStore.cy";

function formatString(text) {
    return text.replace('/n  ', '')
}


context("find headers in github", () => {
    const gitPractice = new gitHub();

    const gitHeaders =
        [
            "Product", "Solutions", "Open Source"

        ]



    it("", () => {
        cy.viewport(1250, 660)
        cy.visit(Cypress.env("githubb"))
        //cy.Login('jvnaidu07', 'Jupalle@123');
        gitPractice.gitLength().should('have.length', 3);

        gitPractice.gitLength().each(($el, index) => {
            cy.wrap($el, { timeout: 6000 }).should('contain.text', `${gitHeaders[index]}`)
        });
        cy.githubUrlAssertions();
    });
    it("using within command", () => {
        cy.viewport(1250, 660)
        cy.visit(Cypress.env("githubb"))
        //cy.Login('jvnaidu07', 'Jupalle@123');
        gitPractice.gitLength().should('have.length', 3);
        cy.get(".HeaderMenu--logged-out").within(() => {
            gitPractice.gitLength().each(($el, index) => {
                cy.wrap($el, { timeout: 6000 }).should('contain.text', `${gitHeaders[index]}`)
            });
        })
        cy.githubUrlAssertions();
    });
    it.only("using for loop", () => {
        cy.viewport(1250, 660)
        cy.visit(Cypress.env("githubb"))
        //cy.Login('jvnaidu07', 'Jupalle@123');
        gitPractice.gitLength().should('have.length', 3);
        gitPractice.gitLength().each(($el, index) => {
            cy.wrap($el, { timeout: 6000 }).should('contain.text', `${gitHeaders[index]}`)
        });

        cy.githubUrlAssertions();
    });

})



/*
Using invoke() to call a function:
Since Cypress commands do not actually execute synchronously, they first check to see if the element specified by that selector
is available or not. so you must use the .invoke() function to wait until the element becomes available
            expect($text.trim()).eq(`${gitHeaders}`)

*/
//cy.get("div").invoke("text").then((text) => text.trim()).should("equal", "Tag1");