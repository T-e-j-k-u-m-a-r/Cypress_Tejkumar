describe('Fixtures Demo', function () {

    before(function () {
        cy.visit(`https://opensource-demo.orangehrmlive.com/index.php/auth/login`)

        cy.fixture('testData/appLoginDetails.json').then(function (data) {
            this.data = data;
        })
    })

    it('Login Test', function () {

        cy.get(`#txtUsername`).type(this.data.username)
        cy.get(`#txtPassword`).type(this.data.password)
        cy.get(`#btnLogin`).click()
    })

})