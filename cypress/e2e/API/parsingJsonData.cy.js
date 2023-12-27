/// <reference types = "cypress"/>

import {validateSchema} from '../API/schema/schemaValidation'

const Ajv = require('ajv');
const avj = new Ajv();
describe("parsing json data", ()=>{
    it("validating JSON resoonse", ()=>{
        cy.visit("https://www.google.com/")
        cy.intercept('GET', 'https://www.gstatic.com/intl/en/brandstudio/kato/cookie_choice_component/config.json').as('advertise')
        cy.contains('Advertising').click()
        cy.wait('@advertise');
        cy.request({
            method: 'GET',
            url: 'https://www.gstatic.com/intl/en/brandstudio/kato/cookie_choice_component/config.json'
            
        }).then((response) =>{
            var lastText = response.body.consentText
            expect(response.status).to.eq(200);
            expect(response.body.consentText).to.eq(lastText)
        })
    })
    it("schema validations", ()=>{
        cy.visit("https://www.google.com/")
        cy.intercept('GET', 'https://www.gstatic.com/intl/en/brandstudio/kato/cookie_choice_component/config.json').as('advertise')
        cy.contains('Advertising').click()
        cy.wait('@advertise');
        cy.request({
            method: 'GET',
            url: 'https://www.gstatic.com/intl/en/brandstudio/kato/cookie_choice_component/config.json'
            
        }).then((response) =>{
            const validate = avj.compile(validateSchema)
            const isvalid = validate(response.body);
            expect(isvalid).to.be.true
           
        })

        
    })

})