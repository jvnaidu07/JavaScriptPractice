/// <reference types = "cypress"/>

import practices from "../e2e/selector.cy"
const neatCSV = require('neat-csv');

describe("read data from csv", ()=>{
    let table1;
  
    beforeEach(()=>{
        cy.fixture('2efc').then(neatCSV)
        .then(data =>{
            table1 = data;
            console.log(table1)
        })
    })
    const fillText = new practices();
    it.only("fill the text using csv file", ()=>{
     
    })

})