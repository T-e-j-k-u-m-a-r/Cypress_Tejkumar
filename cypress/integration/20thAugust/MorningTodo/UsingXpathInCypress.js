describe('Using xpath in Cypress Demo', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('TC01', () => {

        cy.xpath(`//input[@id='txtUsername']`).type('Admin')
        cy.xpath(`//input[@id='txtPassword']`).type('admin123')
        cy.xpath(`//input[@id='btnLogin']`).click()


        //verify if the login is success or not
        cy.url().should('include', 'dashboard')
    });

});


