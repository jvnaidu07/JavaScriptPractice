/// <reference types = 'cypress' />


describe("read data from excel", ()=>{
    it("get data from excel", ()=>{
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        const filepath = "C:/Users/jupal/OneDrive/Desktop/csvfile111.csv";
        cy.task('excelToJsonConverter', filepath).then(function(result) {
            console.log(result)
            cy.log(result)
        })
    })
})