describe('Fixtures Demo', () => {

    var loginPageTestData;
    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('example.json').then(function (data) {
            loginPageTestData = data;
        })

    })

    it('TC01', () => {

        cy.url().then(function ($AppURL) {
            cy.log('App URL :: ' + $AppURL)

        })

        // cy.fixture('example.json').then(function (data) {
        //     cy.url().should('not.include', data.homePageURLPath)
        // })



        cy.title().then(function ($AppTitle) {
            cy.log('App URL :: ' + $AppTitle)

        })

        // cy.fixture('example.json').then(function (data) {

        //     cy.get(`#txtUsername`).type(data.username)
        //     cy.get(`#txtPassword`).type(data.password)
        // })

        cy.get(`#txtUsername`).type(loginPageTestData.username)
        cy.get(`#txtPassword`).type(loginPageTestData.password)
        cy.get(`#btnLogin`).click()


        // cy.fixture('example.json').then(function (data) {
        //     cy.url().should('include', data.homePageURLPath)
        // })


    });
});