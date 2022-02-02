describe('Title Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/')
    })

    it.only('Title Verification', () => {

        cy.title().should('equal', 'SKPatro Demo')
        cy.title().should('include', 'SKPatro')
        cy.title().should('include', 'Demo')

    });

});