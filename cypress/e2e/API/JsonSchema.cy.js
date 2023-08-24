/// <reference types = "cypress"/>

import {rahulApiSchema} from '../API/schema/jsonSchema'

const Ajv = require('ajv')
const avj = new Ajv();
describe("validate json schema", ()=>{
    it("validate all response", ()=>{
        cy.visit("https://courses.rahulshettyacademy.com/")
        cy.intercept("GET", "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20230711&st=env").as('rahul')
        cy.get(".fedora-navbar-link.navbar-link").contains("Home").click()   
        cy.wait("@rahul")
        cy.request({
            method: 'GET',
            url: "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20230706&st=env"
        }).then((response)=>{
            const validate = avj.compile(rahulApiSchema);
            const isValid = validate(response.body);
            expect(isValid).to.be.true
        })  
    })
})