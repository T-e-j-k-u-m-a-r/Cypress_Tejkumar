describe('URL Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/')
    })

    it('Verifying part of URL, exact match of an URl & print the URL', () => {

        cy.url().should('include', 'skpatro.github.io')
        cy.url().should('equal', 'https://skpatro.github.io/demo/')
        cy.url().then(function ($url) {
            cy.log(`Application URL :: ` + $url)
        })

    });

    it('Verifying hostname, protocol, URL', () => {

        cy.location().should((loc) => {
            expect(loc.protocol).to.eq('https:')
        })
    });

});