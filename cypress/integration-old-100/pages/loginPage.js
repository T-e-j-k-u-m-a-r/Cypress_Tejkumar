
export class LoginPage {

    loginpage_username = '#uname'
    loginpage_password = '#pwd'
    loginpage_button = "input[type='submit']"

    navigateToApplicationURL(appurl) {
        cy.visit(appurl);
    }

    enterUserName(username) {
        cy.get(this.loginpage_username).type(username)
    }

    enterPassword(password) {
        cy.get(this.loginpage_password).type(password)

    }

    clickOnLoginButton(loginButton) {
        cy.get(this.loginpage_button).click()

    }

    verifyIfLoginIsSuccessOrNot(){
        
    }

}