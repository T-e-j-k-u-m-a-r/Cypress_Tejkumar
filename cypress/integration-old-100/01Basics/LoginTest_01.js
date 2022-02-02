const { LoginPage } = require("../pages/loginPage.js")

describe('Login Test - Valid Flow', () => {

    const loginPage = new LoginPage();

    it('TC01 - Valid UN, Valid Pwd', () => {

        loginPage.navigateToApplicationURL(Cypress.env('appurl'));

        // cy.url().should('include', 'trytestingthis')
        // cy.url().should('equal', 'https://trytestingthis.netlify.app/')

        cy.log("Login URL contains the domain saucelabs")

        loginPage.enterUserName(Cypress.env('username'));
        loginPage.enterPassword(Cypress.env('password'));
        loginPage.clickOnLoginButton();

        expect(cy.get('h2').contains('Login Successful'))
        cy.log("Login successful")

    });
});