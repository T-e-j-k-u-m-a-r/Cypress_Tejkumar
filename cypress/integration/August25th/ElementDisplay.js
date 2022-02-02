describe('Object display Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.contains(`Element Displayed Example`).scrollIntoView()
        cy.get(`#show-textbox`).click()

        cy.get(`#displayed-text`).should('exist')

    });


});