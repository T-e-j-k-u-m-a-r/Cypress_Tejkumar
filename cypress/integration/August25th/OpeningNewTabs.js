describe('Handle opening in new tab Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get('#opentab').invoke('removeAttr', 'target').click()

    });


});