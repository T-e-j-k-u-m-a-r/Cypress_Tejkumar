describe('Login Demo', () => {

    before(function () {
        cy.visit('http://cafetownsend-spine.herokuapp.com/')
    })

    it.only('TC01', () => {

        //Verify the display of several objects
        //Display the username and password in the login screen
        cy.get('form#login-form p').then(function ($loginDetails) {
            cy.log(`Login details :: ` + $loginDetails.text())
        })

        cy.get(`input[name='username']`).type('Luke')
        cy.get(`input[name='password']`).type('Skywalker')
        cy.get(`button[type='submit']`).click()

        //Assert login is pass or not
        cy.url().should('include', 'employees')

        //Logout to the application
        cy.contains('Logout').click();

        //Verify if the app has navigated to login page
        cy.url().should('not.include', 'employees')

    });

});