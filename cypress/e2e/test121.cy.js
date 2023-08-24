/// <reference types = "cypress"/>

const neatCsv = require("neat-csv");
import practices from "./selector.cy";

context("read csv file", ()=>{
    let table;
    before(()=>{
        cy.fixture("csvfile111").then(neatCsv)
        .then(data =>{
            table =data;
        }).then(console.table)
    })


    const list = new practices();

    it("get text from csv file", ()=>{
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        
    })
})