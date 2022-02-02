describe("URL Demo (e2e)", function () {

    before(function () {
        cy.visit(`https://opensource-demo.orangehrmlive.com/`)
        cy.viewport('macbook-16')
    })

    it("TC01", function () {

        //Print the app URL
        cy.url().then(function (url) {
            cy.log('App URL :: ' + url)
        })

        //Check if the URL contains the proper protocol
        cy.location().should(function (loc) {
            expect(loc.protocol).eq('https:')
        })

        //Check if the URL contains proper path
        cy.url().should('include', 'orangehrmlive')

    })
})