/// <reference types = "cypress"/>

const Ajv = require("ajv")
const avj = new Ajv();
import { fakeJsonSchema } from "./schema/fakejsonSchema";

describe("validate json schema", ()=>{
    it("validate all response", ()=>{
        cy.visit("https://dummyjson.com/")

        // cy.request({
        //     method: 'GET',
        //     url: "https://api.github.com/repos/Ovi/DummyJSON"
        // }).then((response)=>{
        //     const validate = avj.compile(fakeJsonSchema);
        //     const isValid = validate(response.body);
        //     expect(isValid).to.be.true
        //})  
    })
})