describe('Print the attribute value Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#autocomplete`).invoke('attr', 'placeholder').should('contain', 'Type to Select Countries')

        cy.get(`#autocomplete`).invoke('attr', 'placeholder').then(function (value) {
            cy.log('Place holder attribute value :: ' + value)
        })
    });
});