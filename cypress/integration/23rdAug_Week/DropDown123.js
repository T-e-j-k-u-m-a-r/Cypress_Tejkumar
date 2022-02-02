describe('Drop Down Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#dropdown-class-example`).scrollIntoView()
        cy.get(`#dropdown-class-example`).select('Selenium')
        cy.wait(2000)

        //verify the selected value
        cy.get(`#dropdown-class-example`).find('option:selected', 'Selenium')


    });


});