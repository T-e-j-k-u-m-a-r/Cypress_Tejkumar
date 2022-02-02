describe('Title Demo (e2e)', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('TC01', () => {

        cy.title().then(function (title) {
            cy.log('App Title : ' + title)
        })

        cy.title().should('eq', 'OrangeHRM')

        cy.title().should('include', 'HRM')

    });


});