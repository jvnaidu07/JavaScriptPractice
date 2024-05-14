/// <reference types = "cypress"/>

describe("get element text", () =>{
    it("", ()=>{
        let findtext = [];
        cy.visit("https://www.google.com");
        //cy.get("input[class='gNO89b']").last().should('have.value', 'Google Search')
        cy.get("div[class='uU7dJb']").then($el =>{
            const getText = $el.text();
            findtext.push(getText);
            expect(getText).is.to.be.equal(findtext.join(""));

        })

    })
})
