
describe('URL Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.url().should('include', 'codenboxautomationlab')

    });

    it.only('Display hostname & protocol', () => {

        //verify the protocol & display it
        cy.location().then(function (loc) {
            cy.log("hostname :: " + loc.hostname)
            cy.log("protocol :: " + loc.protocol)

            expect(loc.protocol).eq('http:')

        })

    });

});