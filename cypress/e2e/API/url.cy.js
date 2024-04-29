/// <reference types = "cypress"/>

describe("url assertions", () =>{
    it("", ()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("li[role='presentation']", {timeout:10000}).contains("Women").should('contain', 'Women').click()

        //find the request url and mention over here
        cy.request("https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20240410&st=env").then((response) =>{

            const getElement = response.body.injector_basename
            expect(response.status).eq(200);
            expect(response.body.injector_basename).to.eq(getElement)
        })
    })
});