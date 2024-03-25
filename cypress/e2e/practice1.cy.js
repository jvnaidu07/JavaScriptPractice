/// <reference types = "cypress"/>


context("practice fixtures", () => {
    before(() => {
        cy.fixture("mercury").then((data) => {
            //this.data = data;
            globalThis.data = data;
        })
    })

    const fieldData1 = 
        [ "text1","text2","text3","text4","text5","text6","text7"]

    
    it("", () => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.get("input[maxlength='60']").each((val, index)=>{
            cy.wrap(val).type(fieldData1[index]).should('have.value', fieldData1[index])
        })

    })

})
