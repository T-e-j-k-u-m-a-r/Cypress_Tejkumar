describe("Testing different viewport", function () {

    before(function () {
        cy.visit(`https://opensource-demo.orangehrmlive.com/`)
    })

    it("macbook-11", function () {
        cy.viewport('macbook-11')
        cy.screenshot()
        cy.wait(1000)
    })

    it("macbook-16", function () {
        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(1000)
    })

    it("iPhone6", function () {
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(1000)
    })

})