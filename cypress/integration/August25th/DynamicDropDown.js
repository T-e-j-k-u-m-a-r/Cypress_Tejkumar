describe('Dynamic dropdown Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {
        cy.get(`#autocomplete`).type('India')

        cy.xpath(`//div[text()='India']`).click()
    });


});