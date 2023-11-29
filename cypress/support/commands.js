import gitHub from "../e2e/githubSelectors/gitHubStore.cy";
import practices from "../e2e/selector.cy"
import { domColors } from "../fixtures/colorObj"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require("@4tw/cypress-drag-drop");
Cypress.Commands.add("validateText", (country, city, height, built, rank) => {
    cy.get("tbody[style='margin:0;padding:0'] td").contains(country).should('have.text', country)
    cy.contains(city).should('have.text', city)
    cy.contains(height).should('have.text', height)
    cy.contains(built).should('have.text', built)
    cy.contains(rank).should('have.text', rank)
})
Cypress.Commands.add("getTableText", (firstName, lastName, Zip, birthday, points, average, amount) => {
    cy.get(".row-hover tr td").contains(firstName).should('have.text', firstName)
    cy.contains(lastName).should('have.text', lastName)
    cy.contains(Zip).should('have.text', Zip)
    cy.contains(birthday).should('have.text', birthday)
    cy.contains(points).should('have.text', points)
    cy.contains(average).should('have.text', average)
    cy.contains(amount).should('have.text', amount)
})
Cypress.Commands.add("fillBgColors", () => {
    cy.get(".singleItem .palette div").each((el, index) => {
        cy.wrap(el).should('have.attr', `style`, `background-color:${domColors.colorItems3[index]}`)
    })

})
const pages = new practices()
Cypress.Commands.add("headers", () => {
    pages.headers().contains("News").should("be.visible")
    pages.headers().contains("News").should("have.text", "News")
    pages.headers().contains("Demo").should("have.text", "Demo")
    pages.headers().contains("Resources").should("have.text", "Resources")
    pages.headers().contains("Support").should("have.text", "Support")
    pages.headers().contains("Features").should("have.text", "Features")
    pages.headers().contains("Pricing").should("have.text", "Pricing")
})
Cypress.Commands.add("validateTtiles", () => {
    cy.get("#sidebar #categories-4 ul li")
})
Cypress.Commands.add("validateDemoWebsitesTitles", () => {
    cy.get(".ez-toc-list-level-3 li")

})
Cypress.Commands.add("validateUrl", () => {
    cy.url().should('include', 'php')
    cy.url().should('contain', 'register.php')

})
const productTitles = ["\n\nBreathe-Easy Tank \n", "\n\nAntonia Racer Tank \n", "\n\nMaya Tunic \n", "\n\nChloe Compete Tank \n", "\n\nLeah Yoga Top \n",
    "\n\nNona Fitness Tank \n", "\n\nNora Practice Tank \n", "\n\nZoe Tank \n", "\n\nBella Tank \n", "\n\nLucia Cross-Fit Bra \n", "\n\nPrima Compete Bra Top \n",
    "\n\nCeleste Sports Bra \n", "\n\n\n\n"]

Cypress.Commands.add("titles", () => {

    cy.get(".product-item-info strong").each((el, index) => {
        cy.wrap(el).should('have.text', `${productTitles[index]}`)

    })
});

const githubPractice = new gitHub();
Cypress.Commands.add("Login", (userName, password) => {
    githubPractice.githubUserName().type(userName);
    githubPractice.girhubPassword().type(password);
    // cy.get("input[name='login']").type(userName);
    // cy.get("input[type='password']").type(password);
    //userName: jvnaidu07, pass: Jupalle@123
});
Cypress.Commands.add("githubUrlAssertions", () => {
    cy.url().should("include", "github");
    cy.url().should('eq', 'https://github.com/');
})


