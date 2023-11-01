///<reference types = "cypress"/>
import 'cypress-file-upload'

context("file upload", () => {
    it("file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('test1.xlsx')
        cy.get("#file-submit").click()
        cy.contains("File Uploaded!").should('have.text', "File Uploaded!")
    })
    it("rename file - file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: 'test1.xlsx', fileName: 'myfile.xlsx' })
        cy.get("#file-submit").click()
        cy.contains("File Uploaded!").should('have.text', "File Uploaded!")
    })
    it("file upload drag and rop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").last().attachFile('test1.xlsx', { subjectType: 'drag-n-drop' })
    })
    it.only("file upload drag and rop", () => {
        cy.visit("https://courses.rahulshettyacademy.com/")
        cy.get(".navigation.clearfix").should('have.attr', 'class', 'navigation clearfix')
        cy.rahulPageHeaders();
    })
})





