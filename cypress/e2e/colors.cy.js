/// <reference types = "cypress" />

import { tableContent } from "../fixtures/table"
import { bgColors } from "../fixtures/table"
import practices from "./selector.cy"
import 'cypress-file-upload';

describe("assert color boxes", () => {

    const backgroundColors = {
        colors1: [" rgb(205, 24, 24);", " rgb(78, 54, 54);", " rgb(50, 30, 30);", " rgb(17, 109, 110);"],
        colors2: ["background-color: rgb(253, 226, 243);", "background-color: rgb(229, 190, 236);", "background-color: rgb(145, 127, 179);", "background-color: rgb(42, 47, 79);"]
    }
    it("checkout background colors", () => {
        cy.visit(Cypress.env("colorBoxes"))
        cy.get(".singleItem .item .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `background-color:${backgroundColors.colors1[index]}`)
        })
    })

    it("checkout background colors", () => {
        cy.visit("https://colorhunt.co/palette/2a2f4f917fb3e5beecfde2f3")
        cy.get(".singleItem .item .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `${backgroundColors.colors2[index]}`)

        })
    })


    const tableDetails = [
        { company: "Google", contact: "Maria Anders", country: "Germany" },
        { company: "Meta", contact: "Francisco Chang", country: "Mexico" },
        { company: "Microsoft", contact: "Roland Mendel", country: "Austria" },
        { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
        { company: "Adobe", contact: "Yoshi Tannamuri", country: "Canada" },
        { company: "Amazon", contact: "Giovanni Rovelli", country: "Italy" },

    ]
    const details = (company, contact, country) => {
        cy.get(".separator div").first().contains(company).should('have.text', company)
        cy.contains(contact).should('have.text', contact)
        cy.contains(country).should('have.text', country)

    }


    it("get table content", () => {
        cy.visit("http://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        tableDetails.forEach(ele => {
            details(ele.company, ele.contact, ele.country)
        })
    })

    const tableDetails1 =
        ["Google", "Maria Anders", "Germany", "Meta", "Francisco Chang", "Mexico", "Microsoft", "Roland Mendel",
            "Austria", "Island Trading", "Helen Bennett", "UK", "Adobe", "Yoshi Tannamuri", "Canada", "Amazon", "Giovanni Rovelli", "Italy"

        ]
    it("checkout background colors", () => {
        cy.visit("http://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        cy.get("#customers tr td").each((ele, index) => {
            //cy.get("#customers tr td").contains(tableDetails1[index])
            cy.wrap(ele).should('have.text', tableDetails1[index])
            //bottom one also will work
            //cy.contains(tableDetails1[index]).should('contain', tableDetails1[index])

        })
    })
    it("intercept method to wait some amount of time", () => {
        cy.visit("https://www.google.com")
        cy.get("div .gLFyf").should('have.attr', 'title')
        cy.intercept("POST", "https://play.google.com/log?format=json&hasfast=true&authuser=0").as("google")
        cy.get("div .gLFyf").type("automationstore" + "{enter}")
        cy.wait("@google")
    })


    const getTableValues = [
        { country: "UAE", city: "Dubai", height: "829m", built: "2010", rank: "Top 10 Highly Paid Indian CEOs in USA" },
        { country: "Saudi Arabia", city: "Mecca", height: "601m", built: "2012", rank: "Selenium WebDriver 25+ Most Important Commands" },
        { country: "Taiwan", city: "Taipei 101", height: "509m", built: "2004", rank: "Top 10 Indian Startups Making Waves in 2023" },
        { country: "China", city: "Shanghai", height: "492m", built: "2008", rank: "How I learned Selenium in 4 weeks" }
    ]

    it("aserting table", () => {
        cy.visit("http://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
        getTableValues.forEach(val => {
            cy.validateText(val.country, val.city, val.height, val.built, val.rank)
        })
    })

    it("aserting table", () => {
        const pages = new practices();

        cy.visit("https://tablepress.org/demo/")
        tableContent.forEach(ele => {
            cy.getTableText(ele.firstName, ele.lastName, ele.Zip, ele.birthday, ele.points, ele.average, ele.amount)
        })
        cy.headers()

    })

    it("assert bgcolors", () => {
        cy.visit("https://colorhunt.co/palette/65647c8b7e74c7bca1f1d3b3")
        cy.get(".singleItem .item .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `background-color:${bgColors[index]}`)
        })
    })
    const titles = [
        "Accessibility Testing", "Agile Testing", "Culture", "AI", "Abstracta in Action", "DevOps", "JMeter DSL", "Mobile Testing",
        "Observability", "Performance Testing", "Podcast", "Security Testing", "Software Development", "Software Testing", "Test Automation",
        "Tools", "Training Courses"
    ]
    it("assert bgcolors", () => {
        cy.visit("https://abstracta.us/blog/software-testing/best-demo-websites-for-practicing-different-types-of-software-tests/")
        titles.forEach((el, index) => {
            cy.validateTtiles.contains(el).should('have.text', el)
        })
    })
    //another way to use index
    const demoWebsites =
        [
            "Demoblaze", "OpenCart", "WPmobilepack", "Juice-Shop", "2Checkout", "DBank Demo", "OrangeHRM", "Computer-Database", "JPetStore Demo", "DemoQA", " SwagLabs ", "Selenium Easy",
            "Test Pages for Automating", "The-Internet", "GlobalsQA", " UI Test Automation Playground ", "Basic Calculator", "The Automation Practice – clothing store",
            "Public-APIs", "Restful Booker", "PetStore"
        ]
    const demoWebsites1 =
        [
            "Demo E-commerce Sites", "Demoblaze", "OpenCart", "WPmobilepack", "Juice-Shop", "2Checkout", "Example Systems", "DBank Demo", "OrangeHRM",
            "Computer-Database", "JPetStore Demo", "Demo Sites for Trying Web Test Automation Tools", "DemoQA", " SwagLabs ", "Selenium Easy", "Test Pages for Automating", "The-Internet", "GlobalsQA",
            " UI Test Automation Playground ", "Basic Calculator", "The Automation Practice – clothing store",
            "Sites for Trying Service Level Testing Tools (API, SOAP, REST)", "Public-APIs", "Restful Booker", "PetStore", "Practice Testing Better", "Recommended for You"
        ]

    it("verify All tiltles", () => {
        cy.visit(Cypress.env("demoWebsiteUrls"))
        cy.validateDemoWebsitesTitles().each((el, index) => {
            cy.wrap(el).contains(demoWebsites[index]).should('have.text', demoWebsites[index])
        })
        cy.get(".ez-toc-list.ez-toc-list-level-1 a").each((el, index) => {
            cy.wrap(el).should('have.attr', 'title', demoWebsites1[index])
        })
    })

    const verifyBgColors =
        [
            "background-color: rgb(192, 74, 130);", "background-color: rgb(220, 132, 73);", "background-color: rgb(253, 211, 106);", "background-color: rgb(190, 109, 183);"
        ]
    it("verify bg colors", () => {
        cy.visit("https://colorhunt.co/palette/be6db7fdd36adc8449c04a82")
        cy.get(".singleItem .palette div").each((el, index) => {
            cy.wrap(el).should('have.attr', `style`, `${verifyBgColors[index]}`)
        })
        //calculate number of likes
        let sum = 0;
        cy.get(".button.like").each(($el) => {
            let likes = $el.text();
            let removeLike = likes.replace("Like", "")
            let removeComma = removeLike.split(',').join('')
            for (let i = 0; i < $el.length; i++) {
                sum += Number(removeComma)
            }
        }).then(() => {
            cy.log(sum)
        })
    })
    it("file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('concrete.xlsx')
        cy.get("#file-submit").should('have.attr', 'id', 'file-submit')
        cy.get("#file-submit").click({ force: true })
        cy.contains("File Uploaded!").should("have.text", "File Uploaded!")
    })
    it("get price of all products", () => {
        let summ = 0;

        cy.visit("https://automationteststore.com/index.php?rt=product/category&path=36")
        cy.get(".pricetag.jumbotron").each(($el, index) => {
            let price = $el.text();
            let removeDollar = price.replace("$", "")
            for (let i = 0; i < $el.length; i++) {
                summ += Number(removeDollar)
            }
        }).then(() => {
            cy.log(summ)
            expect(summ).be.eq(161.5)
        })
        cy.contains('Makeup').should('have.text', 'Makeup')
    })
    const productTitles = 
    [
        "L'EXTRÊME Instant Extensions Lengthening Mascara","Tropiques Minerale Loose Bronzer","Delicate Oil-Free Powder Blush",
        "Product with stock locations","Viva Glam Lipstick","Waterproof Protective Undereye Concealer"
    ]
    it.only("verify titles", ()=>{
        cy.visit("https://automationteststore.com/index.php?rt=product/category&path=36")
        cy.get(".fixed_wrapper .fixed a").each(($el,index)=>{
            cy.wrap($el).should('have.attr', 'title', productTitles[index])
        })

    })

});