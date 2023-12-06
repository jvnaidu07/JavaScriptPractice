/// <reference types = 'cypress'/>
const neatCSV = require('neat-csv')

import practices from "./selector.cy";
context("practice auto complete scenario", () => {
    let table;
    beforeEach(() => {
        cy.fixture('registerPage').then(neatCSV)
            .then(data => {
                table = data;

            }).then(console.table)
    })

    const credentials = new practices();

    it("login page", () => {

        cy.visit(Cypress.env("loginPage"));
        credentials.enterAdminCredentials(1).type(table[0]['firstName']).should('have.value', 'venkat');
        credentials.enterAdminCredentials(2).type(table[0]['lastName']).should('have.value', 'naidu')
    });
    it("register page", () => {

        cy.visit(Cypress.env("registerPage"));
        credentials.lengthOfTheElements().should('have.length', 13);
        credentials.lengthOfTheElements().should('have.length.be.greaterThan', 12);

        credentials.enterAdminCredentials(1).type(table[1]['firstName']).should('have.value', table[1]['firstName'])
        credentials.enterAdminCredentials(2).type(table[1]['lastName']).should('have.value', table[1]['lastName'])
        credentials.enterAdminCredentials(3).type(table[0]['phone']).should('have.value', table[0]['phone'])
        credentials.enterAdminCredentials(4).type(table[0]['email']).should('have.value', table[0]['email'])
        credentials.enterAdminCredentials(5).type(table[0]['address']).should('have.value', table[0]['address'])
        credentials.enterAdminCredentials(6).type(table[0]['city']).should('have.value', table[0]['city'])
        credentials.enterAdminCredentials(7).type(table[0]['state']).should('have.value', table[0]['state'])
        credentials.enterAdminCredentials(8).type(table[0]['postalCode']).should('have.value', table[0]['postalCode'])
        credentials.enterAdminCredentials(9).type(table[1]['userName']).should('have.value', table[1]['userName'])
        credentials.enterAdminCredentials(10).type(table[1]['password']).should('have.value', table[1]['password'])
        credentials.enterAdminCredentials(11).type(table[1]['confirmPassword']).should('have.value', table[1]['confirmPassword'])

    })

    const enterDetails = [
        {
            firstName: 'firstName', lastName: 'lastName', phone: 'phone', email: 'email', address: 'address', city: 'city',
            state: 'state', postalCode: '654654', userName: 'username', password: 'password', confirmPassword: 'confirm password'
        }
    ]

    const validateEle = (firstName, lastName, phone, email, address, city, state, postalCode, userName, password, confirmPassword) => {
        credentials.enterAdminCredentials(1).type(firstName).should('have.value', firstName)
        credentials.enterAdminCredentials(2).type(lastName).should('have.value', lastName)
        credentials.enterAdminCredentials(3).type(phone).should('have.value', phone)
        credentials.enterAdminCredentials(4).type(email).should('have.value', email)
        credentials.enterAdminCredentials(5).type(address).should('have.value', address)
        credentials.enterAdminCredentials(6).type(city).should('have.value', city)
        credentials.enterAdminCredentials(7).type(state).should('have.value', state)
        credentials.enterAdminCredentials(8).type(postalCode).should('have.value', postalCode)
        credentials.enterAdminCredentials(9).type(userName).should('have.value', userName)
        credentials.enterAdminCredentials(10).type(password).should('have.value', password)
        credentials.enterAdminCredentials(11).type(confirmPassword).should('have.value', confirmPassword)

    }


    it("register page", () => {
        cy.visit(Cypress.env("registerPage"));
        enterDetails.forEach((ele, index) => {
            validateEle(ele.firstName, ele.lastName, ele.phone, ele.email, ele.address, ele.city, ele.state, ele.postalCode, ele.userName, ele.password, ele.confirmPassword)
            credentials.dropdownvalue().select('AUSTRALIA').should('have.value', 'AUSTRALIA')
        })
    });

    const pageHeaders =
        [
            'Choose', 'Flight #', 'Airline', 'Departs: ', 'Arrives: ', 'Price'
        ]
    it.only("find total price", () => {
        cy.visit("https://blazedemo.com/reserve.php")
        cy.get("tr th").should('have.length', 6)
        cy.get('tr th').each(($el, index) => {
            cy.wrap($el).should('have.text', `${pageHeaders[index]}`)
        })

        cy.get('tr td').then($el => {
            let arr = [];
            let sum = arr[0];

            let price = $el.text();
            let rem = price.replace("43Virgin America1:43 AM9:45", " ");
            let rem1 = rem.replace("United Airlines7:43 AM10:45", " ")
            let rem2 = rem1.replace("Aer Lingus5:27 AM8:22", " ")
            let rem3 = rem2.replace("Virgin America11:23 AM1:45", " ")
            let rem4 = rem3.replace("Lufthansa1:45 AM8:34", " ")
            let rem5 = rem4.replace(/PM/g, "")
            let remDolla = rem5.replace(/\$/g, ",");
            let remSingleComma = remDolla.replace(",", "");
            arr.push(remSingleComma);
            for (let i=0; i<arr.length; i++) {
                sum += Number[i]
            }
            cy.log(sum)
        })
    })
})
 