export class Login {

    //state
    //constructor
    constructor() {
        this.username = "#txtUsername";
        this.password = "#txtPassword";
        this.loginButton = "#btnLogin";
    }

    //behaviour
    user() {
        return cy.get(this.username)
    }

    pwd() {
        return cy.get(this.password)
    }

    loginBtn() {
        return cy.get(this.loginButton)
    }

    verifyLogin(homePagePath) {
        if (cy.url().should('include', homePagePath)) {
            return true
        } else {
            return false
        }
    }

}

export default Login