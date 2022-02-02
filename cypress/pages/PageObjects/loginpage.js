export class Login {

    //states
    //constructor
    constructor() {
        this.username = "#txtUsername";
        this.password = "#txtPassword";
        this.loginButton = "#btnLogin";
    }

    //behaviour
    get user() {
        return cy.get(this.username)
    }

    get pwd() {
        return cy.get(this.password)
    }

    get loginBtn() {
        return cy.get(this.loginButton)
    }
}
