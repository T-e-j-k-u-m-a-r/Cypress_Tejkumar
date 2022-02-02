describe('Data Driven Testing using Fixtures', function () {

    before(function () {
        cy.visit(`https://opensource-demo.orangehrmlive.com/index.php/auth/login`)

        cy.fixture('testData/appLoginDetails.json').then(function (data) {
            this.data = data;
        })

    })

    it('TC01', function () {

        cy.url().should('not.include', 'dashboard')
        cy.get(`#txtUsername`).type(this.data.username)
        cy.get(`#txtPassword`).type(this.data.password)
        cy.get(`#btnLogin`).click()
        cy.url().should('include', 'dashboard')

    })


})