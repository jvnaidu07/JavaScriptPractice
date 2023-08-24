/// <reference types = "cypress"/>

describe("read data from xlsx", ()=>{
    it.skip("navigate to heroku", ()=>{
        cy.writeFile("cypress\\fixtures\\example.json",{
            username:"MY1313_2_ADMIN",
            password: 12345678
        })
       
    })
    it("navigate to heroku", ()=>{
        cy.visit("http://online.myschoolerp.com/")
        cy.fixture("example").then((profile)=>{
            expect(profile.username).to.eq("MY1313_2_ADMIN")
            cy.get("#txtUserID").type(profile.username)
            cy.get("#txtUserID", {timeout:60000}).should('have.id', 'txtUserID').should('have.attr', 'id').should('equal', 'txtUserID')
            cy.get("#txtPWD").type(profile.password)
            cy.get("#txtPWD", {timeout:60000}).should('have.id', 'txtPWD').should('have.attr', 'id').should('equal', 'txtPWD')
            cy.get("#btnSignIn").click({force:true})

        })
    })
})