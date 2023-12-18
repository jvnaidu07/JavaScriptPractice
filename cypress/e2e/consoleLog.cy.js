/// <reference types = "cypress"/>

import practices from "../e2e/selector.cy"
const neatCSV = require('neat-csv');
import rgbHex from 'rgb-hex';

describe("read data from csv", () => {
    let table1;

    before(() => {
        cy.fixture('csvfile111').then(neatCSV)
            .then(data => {
                table1 = data;
                console.log(table1)
            })
    })
    const fillText = new practices();
    it("fill the text using csv file", () => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.url().should('include', 'php')
        cy.url().should('contain', 'register.php')
        fillText.enterValues(1).type(table1[1]['firstName']).should('have.value', 'akanksha')
        fillText.enterValues(2).type(table1[0]['lastName']).should('have.value', 'Naidu')
        fillText.enterValues(3).type(table1[0]['phone']).should('have.value', '8897134081')
        fillText.enterValues(4).type(table1[0]['email']).should('have.value', 'jupallevenkat@gmail.com')
        fillText.enterValues(5).type(table1[0]['address']).should('have.value', 'Mellacheruvu')
        fillText.enterValues(6).type(table1[0]['city']).should('have.value', 'Piler')
        fillText.enterValues(7).type(table1[0]['state']).should('have.value', 'Andhra Pradesh')
        fillText.enterValues(8).type(table1[0]['postalCode']).should('have.value', '517214')
        fillText.selectIndia().select('INDIA')
        fillText.enterValues(9).type(table1[1]['userName']).should('have.value', 'ak')
        fillText.enterValues(10).type(table1[0]['password']).should('have.value', 'S1.s1.s1')
        fillText.enterValues(11).type(table1[2]['confirmPassword']).should('have.value', 'S1.s1.s1')
    })

    const backgroundColors =
        [" rgb(196, 176, 255);", " rgb(134, 150, 254);", " rgb(73, 66, 228);", " rgb(17, 0, 158);"]

    it("", () => {
        cy.visit("https://colorhunt.co/palette/11009e4942e48696fec4b0ff")
        cy.get(".singleItem .item .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `background-color:${backgroundColors[index]}`)
        })
    })
    const colorAttr = ["background: #1857f7 no-repeat center; background-size: initial;",
        "background: #eb6703 no-repeat center; background-size: initial;", "background: #ef3dff no-repeat center; background-size: initial;",
        "background: #ef3dff no-repeat center; background-size: initial;", "background: #ffffff no-repeat center; background-size: initial;",
        "background: #ffd500 no-repeat center; background-size: initial;", "background: #8f8f8f no-repeat center; background-size: initial;",
        "background: #000000 no-repeat center; background-size: initial;", "background: #8f8f8f no-repeat center; background-size: initial;",
        "background: #53a828 no-repeat center; background-size: initial;"]




    const productTitles =
        ["Breathe-Easy Tank", "Antonia Racer Tank", "Maya Tunic", "Chloe Compete Tank", "Leah Yoga Top","Nona Fitness Tank",
        "Nora Practice Tank", "Zoe Tank", "Bella Tank", "Lucia Cross-Fit Bra", "Prima Compete Bra Top","Celeste Sports Bra", "\n\n\n\n"]

    it("", () => {
        //cy.viewport(550,600)
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".product-item-details div div div .swatch-option.color", { timeout: 60000 }).each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `${colorAttr[index]}`)
        })
        let sum = 0;
        cy.get(".product-items.widget-product-grid li .price-box.price-final_price").each(($el) => {
            const getPrice = $el.text();
            const removeText = getPrice.replace(/As low as/g, '');
            const removeDollor = removeText.split("$").join("");

            for (var i = 0; i < $el.length; i++) {
                sum += Number(removeDollor)
            }
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(236)
        })
        cy.get(".level-top.ui-corner-all").eq(1).trigger('mouseover');
        cy.contains('Gear').trigger('mouseover')
        cy.contains('Training').trigger('mouseover')
        cy.get(".level-top.ui-corner-all", { timeout: 30000 }).eq(2).trigger('mouseover');
        cy.contains('Tops').click({ force: true });
        //cy.titles();

        cy.get(".product-item-info strong").each((el, index) => {
            cy.wrap(el).should(`contain.text`, `${productTitles[index]}`)

        })
    })
})