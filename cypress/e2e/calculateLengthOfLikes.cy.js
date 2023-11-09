/// <reference types = "cypress"/>

describe("calculate the length of likes", ()=>{
    it("calculate colors likes", ()=>{
        let sum = 0;
        cy.visit(Cypress.env("lengthOfLikes"))
        cy.get(".actions .button span").should("exist")
        cy.get(".actions .button span").should('be.visible')

        cy.get(".flex .actions").each(($el) =>{
            let data = $el.text()
            let rep = data.replace("Like", "")
            let repp = rep.split(",").join("");
            cy.log(repp)            
            for (var i=0; i<$el.length;i++) {
                sum += Number(repp)
            }           
        }).then(()=>{
            cy.log(sum)
        })
    })
    it.only("calculate colors likes", ()=>{
        let sum = 0;
        cy.visit(Cypress.env("lengthOfLikes"))
        cy.get(".actions .button span").should("exist")
        cy.get(".actions .button span").should('be.visible')

        cy.get(".flex .actions span").each(($el) =>{
            let data = $el.text()
            let rep = data.replace("Like", "")
            let repp = rep.split(",").join("");
            for (var i=0; i<$el.length;i++) {
                sum += Number(repp)
            }     
        }).then(()=>{
            cy.log(sum)
        })
    })
})