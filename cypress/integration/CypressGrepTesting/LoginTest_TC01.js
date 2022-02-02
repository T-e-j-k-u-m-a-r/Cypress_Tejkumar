describe('Login Test TC01', { tags: '@smoke' }, () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('TC01', () => {

        cy.get(`#txtUsername`).type('Admin')
        cy.get(`#txtPassword`).type(`admin123`)
        cy.get(`#btnLogin`).click()

        cy.url().should('include', 'dashboard')
        cy.get(`#welcome`).click()
        cy.contains(`Logout`).click()

        cy.url().should('include', 'login')

    });


});