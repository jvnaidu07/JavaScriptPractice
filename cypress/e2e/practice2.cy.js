/// <reference types = "cypress"/>



const enterText = 
[
    "processprocessv", "n","6546886", "jefj@gmail.com","ewdfrw","fwefrew","ffewfre","ferrrfgt","cvdsvfere","dwfrwfer", "Efrwre","dfer","Submit"
]

describe("", () =>{
    it("", () =>{
        cy.visit(Cypress.env("registerPage"), {timeout:120000});
        cy.get("table tbody tr td input").each(($el, index) =>{
            cy.wrap($el).type(`${enterText[index]}`,{force:true})
       })
        cy.get("table tbody tr td input").last().click({force:true});
    })
});
