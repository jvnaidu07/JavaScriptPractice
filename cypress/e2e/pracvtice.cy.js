/// <reference types = "cypress"/>

describe("practice background colors", ()=>{

    // setup view port hight and width

    beforeEach("",()=>{
        cy.viewport(1000,874)
    })

    const backColors = 
    {
    color:
    [
        "background-color: rgb(248, 222, 34);", "background-color: rgb(249, 76, 16);", "background-color: rgb(199, 0, 57);","background-color: rgb(144, 12, 63);"
    ],
    colors1:
    [
     " rgb(248, 222, 34);", " rgb(249, 76, 16);", " rgb(199, 0, 57);"," rgb(144, 12, 63);"

    ]
}
    it("follow up", ()=>{
        cy.visit("")
        cy.get(".singleItem  .palette div").each((ele,index) =>{
            cy.wrap(ele).should('have.attr', `style`, `${backColors.color[index]}`)
        })
    })

    it.only("follow up", ()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.get(".singleItem  .palette div").each((ele,index) =>{
            cy.wrap(ele).should('have.attr', `style`, `background-color:${backColors.colors1[index]}`)
        })
        let sum = 0;
        cy.get(".button.like").each((el)=>{
            let te3xt = el.text();
            let rem = te3xt.replace("Like", "")
            let remco = rem.split(",").join("")
            for (let i=0; i<el.length; i++) {
                sum += Number(remco)
            }
        }).then(()=>{
            cy.log(sum)
        })
    })
})
