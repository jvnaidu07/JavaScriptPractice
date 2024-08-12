/// <reference types = "cypress"/>



chai.use(require('chai-sorted'))

describe("practice pagination page", () => {
    it.skip("pagination", () => {
        cy.visit(Cypress.env("pagination"))
        //cy.get("span .s-pagination-item.s-pagination-button")
        cy.contains("Next").should('exist').as('nextButton');
        const goToNextPage = () => {
            cy.get("@nextButton").invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get("@nextButton").invoke('attr', 'disabled')
                }
                else {
                    cy.get("@nextButton", { timeout: 60000 }).click().then(goToNextPage)
                }
            })
        }
        goToNextPage({ timeout: 60000 })
    });


    it("pagination", () => {
        cy.visit("https://demo.virtuemart.net/")
        cy.contains("Next").should('exist').as('nextButton');
        cy.get("#limit").last().should('exist').select('15')
        const goToNextPage = () => {
            cy.get(".pagination-next").first().invoke('attr', 'disabled').then(disabled => {
                if (disabled === 'disabled') {
                    cy.get("@nextButton").invoke('attr', 'disabled')
                }
                else {
                    cy.get(".pagination-next", { timeout: 60000 }).first().click().then(goToNextPage)
                }
            })
        }
        goToNextPage({ timeout: 60000 })

    });



    const selectNum = ['15', '30', '60', '150']
    const proItems =
        ["Paid extensions demo", "Product attributes", "Product pattern"]
    const headrs =
        ["Dress Shirt with tie", "ZZZZZZZ", "Safety Helmet", "T-Shirt classic blue", "maladeta", "Rawforms - price per input +100 €", "Rawforms"]
    it.only("pagination", () => {
        cy.visit("https://demo.virtuemart.net/")
        cy.contains("Next").should('exist').as('nextButton');
        cy.get("#limit").last().should('exist').each(($el, index) => {
            cy.wrap($el).select(`${selectNum[index]}`)
        });
        cy.get("#limit").then(val => {
            const getText = val.text();
            const removeText = getText.replace("\n\t15\n\t30\n\t60\n\t150\n", "150")
            expect(removeText).to.eq('150')
            expect(getText).to.contain('60');
            cy.url().should('contain', 'results,1-15')
        })
        cy.get(".row").first()
            .then(($cells) => Cypress._.map($cells, 'innerText'))
            .then((strings) => cy.log(strings));
        //Cypress._.map(strings, parseFloat)).should('not.be.sorted') 
        cy.get('.row').first().each((el, index) => {
            expect(el).to.contain("Product pattern");
            expect(el).to.contain(`${proItems[index]}`);
            cy.wrap(el).should('contain', proItems[index])
        });
        cy.get(".vm-product-descr-container-1 h2 a").each(($el, index) => {
            cy.wrap($el).should('contain.text', `${headrs[index]}`)
        })
    });
});
