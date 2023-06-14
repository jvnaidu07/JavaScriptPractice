/// <reference types = "cypress" />

describe("assert color boxes", ()=>{

const backgroundColors = {
colors1:[" rgb(205, 24, 24);", " rgb(78, 54, 54);", " rgb(50, 30, 30);", " rgb(17, 109, 110);"],
colors2: ["background-color: rgb(253, 226, 243);", "background-color: rgb(229, 190, 236);", "background-color: rgb(145, 127, 179);", "background-color: rgb(42, 47, 79);"]
}
    it("checkout background colors", ()=>{
        cy.visit(Cypress.env("colorBoxes"))
        cy.get(".singleItem .item .palette div").each((el, index) =>{
            cy.wrap(el).should('have.attr', `style`, `background-color:${backgroundColors.colors1[index]}`)         

        })
    })
    
    it("checkout background colors", ()=>{
        cy.visit("https://colorhunt.co/palette/2a2f4f917fb3e5beecfde2f3")
        cy.get(".singleItem .item .palette div").each((el, index) =>{            
        cy.wrap(el).should('have.attr', `style`, `${backgroundColors.colors2[index]}`)         

        })
    })


    const tableDetails = [
        {company:"Google", contact:"Maria Anders", country:"Germany"},
        {company:"Meta", contact:"Francisco Chang", country:"Mexico"},
        {company:"Microsoft", contact:"Roland Mendel", country:"Austria"},
        {company:"Island Trading", contact:"Helen Bennett", country:"UK"},
        {company:"Adobe", contact:"Yoshi Tannamuri", country:"Canada"},
        {company:"Amazon", contact:"Giovanni Rovelli", country:"Italy"},
     
    ]
    const details = (company,contact,country) =>{
        cy.get(".separator div").first().contains(company).should('have.text', company)
        cy.contains(contact).should('have.text', contact)
        cy.contains(country).should('have.text', country)

    }


    it.only("checkout background colors", ()=>{
        cy.visit("http://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        tableDetails.forEach(ele =>{
            details(ele.company, ele.contact, ele.country)
        })
        
    })
})