describe('URL Related commands', () => {

    it.only('TC01', () => {

        cy.visit(Cypress.env('appurl'))

        //print the application title
        cy.title().then(function (appTitle) {
            cy.log("Application title :: " + appTitle)
        })

    });

    it('TC02', () => {

        cy.url().should('equal', 'https://trytestingthis.netlify.app/')
        cy.url().should('contain', 'app')
        cy.url().should('include', 'trytestingthis')

    });

});