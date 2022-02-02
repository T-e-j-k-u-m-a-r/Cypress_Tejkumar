describe('Login Test Demo (smoke)', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('TC01 - Valid Flow', () => {

        //Verify app is in login page or not
        cy.url().should('not.include', 'dashboard')

        cy.get('#txtUsername').type('Admin123')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        //verify login is success or not
        cy.url().should('include', 'dashboard')

    });


});