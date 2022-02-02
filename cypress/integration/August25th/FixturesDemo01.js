describe('Demo', function () {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.fixture('example.json').then(function (data) {
            this.data = data;
        })
    })

    it('TC01', function () {

        cy.get(`#txtUsername`).type(this.data.username)
        cy.get(`#txtPassword`).type(this.data.password)
        cy.get(`#btnLogin`).click()


        cy.url().should('include', 'dashboard')


    });

});