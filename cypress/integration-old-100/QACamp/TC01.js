describe('URL Commands Demo', () => {

    before(function () {
        cy.visit('http://cafetownsend-spine.herokuapp.com/#/')
    })

    it('TC01', () => {

        //cy.url().should('have.text', '#')

        cy.location().should(function (location) {
            expect(location.hostname).eq('cafetownsend-spine.herokuapp.com')
            expect(location.protocol).eq('http:')
        })

    });

});