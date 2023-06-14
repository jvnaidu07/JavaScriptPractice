/// <reference types="Cypress" />
describe("Test Contact Us form via Automation test store", () => {

    const googlePage = {
        typeList: ['fruits', 'mango', 'banana', 'apple', 'biscuite', 'orange', 'shirts', 'laptops', 'mobiles', 'cypress'],
        pageObjects: ['About', 'Advertising', 'India', 'Business', ' How Search works ', 'Settings', 'Privacy', 'Terms']
    }
    it("should be able to submit successful submission via contact us form", () => {
        cy.visit("https://www.google.com")
        googlePage.typeList.forEach(el => {
            cy.get(".a4bIc #APjFqb").type(el)
            cy.get(".G43f7e .sbct").should('have.length.greaterThan', 8)
            cy.get(".a4bIc #APjFqb").clear()

            googlePage.pageObjects.forEach(el => {
                cy.get(".o3j99.c93Gbe").contains(el).should('have.text', el)
            })
            cy.contains('Gmail').should('have.text', 'Gmail')
            cy.contains('Images').should('have.text', 'Images')
        })
    })

    it("Drag and drop", () => {
        const dataTransfer = new DataTransfer()
        cy.visit("https://demo.automationtesting.in/Static.html")
        cy.get("#dragarea div", { timeout: 60000 }).last().trigger('dragstart', {
            dataTransfer
        })
        cy.get("#droparea").last().trigger('drop', {
            dataTransfer
        })
    })
    const listOfHeaders =
        ['Home', 'About ', 'Blog', 'Read More ', 'Resources ', 'SAFe Studio ', 'Glossary', 'Implementing ', 'Customer Stories', 'SAFe Training']
    it("Iterations using forEach", () => {
        const dataTransfer = new DataTransfer()
        cy.visit("https://scaledagileframework.com/contributors/")
        listOfHeaders.forEach(item => {
            cy.get("#menu-create-menu").contains(item).should('have.text', item)

        })
    })
    const mobiles =
        [
            'Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb',
            'Sony xperia z5', 'HTC One M9', 'Sony vaio i5', 'Sony vaio i7'
        ]

    it("Iterations using forEach", () => {
        cy.visit("https://www.demoblaze.com/")
        mobiles.forEach(el => {
            cy.get("#tbodyid .col-lg-4.col-md-6").contains(el).click()
            cy.contains(el, { timeout: 6000 }).should('contain', el)
            cy.contains("Add to cart").should('contain', 'Add to cart')
            cy.go('back')
        })
    })
    // using .each
    it("Iterations using each", () => {
        cy.visit("https://www.demoblaze.com/")
        cy.get("#tbodyid .col-lg-4.col-md-6").each((el, index) => {
            cy.get("#tbodyid .col-lg-4.col-md-6").contains(mobiles[index]).click()
            cy.contains(mobiles[index], { timeout: 6000 }).should('contain', mobiles[index])
            cy.contains("Add to cart").should('contain', 'Add to cart')
            cy.go('back')
        })
    })

    const laptops = 
    ['Sony vaio i5', 'Nexus 6']

    it("Iterations using forEach on laptops", () => {
        cy.visit("https://www.demoblaze.com/#")
        laptops.forEach(el => {
            cy.get(".col-lg-9 #tbodyid .card.h-100").contains(el).click()
            cy.contains(el).should('have.text', el)
            cy.go('back')
        })      
    })
    it.only("async websites ", () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        cy.get("#fname").type("naidu")
        cy.get("button[type= 'button']").then($el =>{
            const btn = $el.attr("type") //here attribute is type
            cy.wrap($el).click().should('not.have.class', 'cls')
        })            
    })
})
