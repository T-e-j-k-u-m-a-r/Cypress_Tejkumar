describe('Handling opening of new tabs Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#opentab`).invoke('removeAttr', 'target').click()

        cy.url().should('include', 'http://www.codenbox.com/')


    });

});