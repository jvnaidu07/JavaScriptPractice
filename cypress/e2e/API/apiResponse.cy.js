/// <reference types = "cypress"/>

import practices from "../selector.cy"

describe("api response", () => {

    const hoverOver = new practices();

    it("get api response", () => {
        cy.visit("https://demos.speechly.com/booking/index.html")
        cy.intercept('POST', 'https://api.speechly.com/login', '{fixture: apiResponse.json}').as("manifest")
        cy.get(".sdn__tabs__item").first().click()
        cy.wait('@manifest').then(({ request, response }) => {
            const re = response.body
        })
        cy.request({
            method: 'GET',
            url: 'https://demos.speechly.com/moderation/manifest.json'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.icons).has.length(3)
            expect(response.body.name).to.equal("Speechly Moderation Demo")
            expect(response.body.short_name).to.equal("Moderation Demo")
            expect(response.body.theme_color).to.equal("#000000")

            expect(response.body.background_color).to.equal("#ffffff")
            expect(response.body.display).to.equal("standalone")

            expect(response.body.icons[0].src).to.equal("favicon.ico")
            expect(response.body.icons[0].type).to.equal("image/x-icon")
            expect(response.body.icons[0].sizes).to.equal("64x64 32x32 24x24 16x16")

            expect(response.body.icons[1].src).to.equal("logo192.png")
            expect(response.body.icons[1].type).to.equal("image/png")
            expect(response.body.icons[1].sizes).to.equal("192x192")

            expect(response.body.icons[2].src).to.equal("logo512.png")
            expect(response.body.icons[2].type).to.equal("image/png")
            expect(response.body.icons[2].sizes).to.equal("512x512")

            cy.log(response)
        })
    })

    const res = {
        "sodar_query_id": "SgitZNDpI7XLmsMP_rGTqA4",
        "injector_basename": "sodar2",
        "bg_hash_basename": "oBMhIGozJCmZhanrY2s6Nzm7GdNkvCqEaGjKud4M6yI",
        "rc_enable": "y",
        "bg_snapshot_delay_ms": "500",
        "is_gen_204": "0"
    }
    let id = '';
    it("assert response", () => {
        cy.visit("https://www.globalsqa.com/demo-site/")
        cy.get(".price_column ul li").contains("DropDown").click()
        cy.request({
            method: 'GET',
            url: "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20230706&st=env"
        }).then((response) => {
            const cid = response.body
            cy.log(cid)
            expect(response.status).to.eq(200)
            expect(response.body.injector_basename).to.eq("sodar2");
            expect(response.body.bg_snapshot_delay_ms).to.eq("500")

        })
    })
    it("navigate to google", () => {
        let sodar_query_id = [];
        let bg_hash_basename = [];
        cy.visit("https://courses.rahulshettyacademy.com/")
        cy.intercept("GET", "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20230706&st=env").as('rahul')
        cy.get(".fedora-navbar-link.navbar-link").contains("Home").click()
        cy.wait("@rahul")
        cy.request({
            method: 'GET',
            url: "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20230706&st=env"
        }).then((response) => {
            const queryId = response.body.sodar_query_id
            const baseName = response.body.bg_hash_basename
            sodar_query_id.push(queryId)
            bg_hash_basename.push(baseName)

            expect(response.body.injector_basename).to.equal("sodar2")
            expect(response.body.bg_snapshot_delay_ms).to.equal("500")
            expect(response.body.sodar_query_id).to.equal(sodar_query_id.join(" "))
            expect(response.body.bg_hash_basename).to.equal(bg_hash_basename.join(" "))
        })
    })
    it("navigate to automation store", () => {
        cy.visit("https://automationteststore.com/")

        hoverOver.mouseHover().trigger('mouseover')
        cy.intercept("POST", "https://automationteststore.com/index.php?rt=r/product/product/get_option_resources").as("response")
        hoverOver.mouseHover().click();
        cy.get(".fixed").first().click()
        cy.wait("@response")
        cy.request({
            method: "GET",
            url: "https://automationteststore.com/index.php?rt=r/product/product/addToCart"
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.item_count).to.equal(0)
            expect(response.body.total).to.equal("$0.00")
            expect(response.body.cart_details).to.contain("shopping-cart")


        })

    })

})
