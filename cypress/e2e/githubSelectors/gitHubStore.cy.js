class gitHub{
    githubUserName() {
        return cy.get("input[name='login']")
    }
    girhubPassword() {
        return cy.get("input[type='password']")
    }
    gitLength() {
        return cy.get(".d-lg-flex.list-style-none li button", {timeout:60000})
    }
    gitHeders(index) {
        return cy.get(".d-lg-flex.list-style-none li button", {timeout:60000}).eq(index)
    }
    moreOptions() {
        return cy.get(".AppHeader-globalBar-start deferred-side-panel", {timeout:60000})
    }
}
export default gitHub