describe('Drop Down Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#dropdown-class-example`).select('API')
        cy.get(`#dropdown-class-example`).find('option:selected', 'API')

    });


});