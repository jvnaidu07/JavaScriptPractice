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

    const ListOfSolutionItems = [

        "Enterprise", "Teams", "Startups", "Education", "CI/CD & Automation", "DevOps", "DevSecOps", "Sponsors", "The ReadME Project"

    ]

    it("using for loop", () => {
        cy.viewport(1250, 660)

        cy.visit(Cypress.env("githubb"))
        //cy.Login('jvnaidu07', 'Jupalle@123');
        cy.get(".mt-0.px-3.px-lg-0.mb-3.mb-lg-0").within(() => {


            gitPractice.gitLength().should('have.length', 3);
            gitPractice.gitLength().each(($el, index) => {
                cy.wrap($el, { timeout: 6000 }).should('contain.text', `${gitHeaders[index]}`)
            });
            cy.githubUrlAssertions();
            gitPractice.listOfProElements().as('proHeaders').should('have.length', 10);
            gitPractice.NavigateToSolutions().as('mainHeaders').first().realHover();
            cy.get('@proHeaders').each(($el, index) => {
                cy.wrap($el).should('have.text', `${listOfProducts[index]}`)
            });
            cy.get('@mainHeaders').should('contain.text', 'Solutions').realHover();
            cy.get(".border-bottom.pb-3.mb-3 span").should('have.length', 2);

            cy.get(".border-bottom.pb-3.mb-3 ul li a").each((item, index) => {
                cy.wrap(item).should('contain.text', `${ListOfSolutionItems[index]}`)
            });
        });

    });
})



/*
Using invoke() to call a function:
Since Cypress commands do not actually execute synchronously, they first check to see if the element specified by that selector
is available or not. so you must use the .invoke() function to wait until the element becomes available
            expect($text.trim()).eq(`${gitHeaders}`)

*/