
describe('Fixtures Demo', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })

    it('Login Test', () => {

        cy.get('input#txtUsername').type()
        cy.get('input#txtPassword').type()
        cy.get('input#btnLogin').click()

    });


});