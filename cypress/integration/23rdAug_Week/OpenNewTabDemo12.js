
describe('Open New Tab Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it.only('TC01', () => {

        cy.get(`#opentab`).invoke('removeAttr', 'target').click()
        cy.wait(3000)
        cy.url().should('eq', 'http://www.codenbox.com/')

    });


});