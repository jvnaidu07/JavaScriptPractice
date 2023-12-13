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
    const listOfProducts =
        [
            "Actions", "Packages", "Security", "Codespaces", "Copilot", "Code review", "Issues", "Discussions", "GitHub Sponsors", "The ReadME Project"
        ]
    it.only("using for loop", () => {
        cy.viewport(1250, 660)

        cy.visit(Cypress.env("githubb"))
        //cy.Login('jvnaidu07', 'Jupalle@123');
        gitPractice.gitLength().should('have.length', 3);
        gitPractice.gitLength().each(($el, index) => {
            cy.wrap($el, { timeout: 6000 }).should('contain.text', `${gitHeaders[index]}`)
        });
        cy.githubUrlAssertions();
        gitPractice.listOfProElements().as('proHeaders').should('have.length', 10);
        cy.get(".d-lg-flex.list-style-none li button").first().realHover()
        cy.get('@proHeaders').each(($el, index) => {
            cy.wrap($el).should('have.text', `${listOfProducts[index]}`)
        })
    });
})



/*
Using invoke() to call a function:
Since Cypress commands do not actually execute synchronously, they first check to see if the element specified by that selector
is available or not. so you must use the .invoke() function to wait until the element becomes available
            expect($text.trim()).eq(`${gitHeaders}`)

*/