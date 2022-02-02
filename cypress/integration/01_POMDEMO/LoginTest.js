import Login from '../../1_pages/1_pageobjects/loginpage'
describe('Demo', function () {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture(`example`).then(function (data) {
            this.data = data;
        })
    })

    it('TC01', function () {

        //Object instantiation
        const login = new Login();

        //enter username
        login.user().type(this.data.username)

        //enter password
        login.pwd().type(this.data.password)

        //click on login button
        login.loginBtn().click()

        //verify if login is success or not
        expect(true).eq(login.verifyLogin(this.data.homePageURLPath))

    });


});