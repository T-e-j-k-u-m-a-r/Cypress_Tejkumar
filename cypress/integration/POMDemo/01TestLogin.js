import Login from '../../pages/PageObjects/loginpage.js'

describe('Demo', function () {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('Login Test', function () {

        const login = new Login();

        login.user.type(this.data.username)
        login.pwd.type(this.data.password)
        login.loginBtn.click()

    });


});

