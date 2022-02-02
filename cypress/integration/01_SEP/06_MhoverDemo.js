describe('Login Test Demo (smoke,e2e)', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('hover on the 3 main menus', () => {

        //Verify app is in login page or not
        cy.url().should('not.include', 'dashboard')

        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        cy.contains(`Admin`).realHover()
        cy.wait(2000)

        cy.contains(`PIM`).realHover()
        cy.wait(2000)

        cy.contains(`Leave`).realHover()
        cy.wait(2000)

    });


});