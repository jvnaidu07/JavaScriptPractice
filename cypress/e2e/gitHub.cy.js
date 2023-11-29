/// <reference types = "cypress"/>
import gitHub from "./githubSelectors/gitHubStore.cy";

context("find headers in github", () => {
    const gitPractice = new gitHub();
    it("", () => {
        cy.viewport(1250, 660)
        cy.visit(Cypress.env("github"))
        //cy.Login('jvnaidu07', 'Jupalle@123');
        gitPractice.gitLength().should('have.length', 3)
        gitPractice.gitHeders(0).invoke('text').then((text)=>{
            expect(text.trim()).eq('Product')
        })
        cy.githubUrlAssertions();
    })
})



/*
Using invoke() to call a function:
Since Cypress commands do not actually execute synchronously, they first check to see if the element specified by that selector 
is available or not. so you must use the .invoke() function to wait until the element becomes available
*/