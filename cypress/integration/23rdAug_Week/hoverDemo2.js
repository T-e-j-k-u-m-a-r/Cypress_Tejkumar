describe('Mouse hover Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get('#mousehover').scrollIntoView()
        cy.get('#mousehover').realHover()
        cy.wait(2000)

        cy.contains('Reload').click()
        cy.wait(2000)
    });

});