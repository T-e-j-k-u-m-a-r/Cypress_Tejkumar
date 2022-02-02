describe('Record Script Demo', () => {


    it('TC01', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();

        cy.url().should('contains', 'dashboard');

    });

});