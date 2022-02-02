describe('Orange HRM Login test ', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/directory/viewDirectory/reset/1')
    })


    it('Valid username & InValid password', () => {

        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin12345')
        cy.get('#btnLogin').click()

        //verify login is success or not
        cy.get('#spanMessage').should('be.visible')
        cy.get('#spanMessage').then(function ($errorMsg) {
            cy.log($errorMsg.text())
        })

    });

    it('InValid username & Valid password', () => {

        cy.get('#txtUsername').type('Admin123')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        //verify login is success or not
        cy.get('#spanMessage').should('be.visible')
        cy.get('#spanMessage').then(function ($errorMsg) {
            cy.log($errorMsg.text())
        })


    });

    it('InValid username & InValid password', () => {


        cy.get('#txtUsername').type('lporter')
        cy.get('#txtPassword').type('lporter')
        cy.get('#btnLogin').click()

        //verify login is success or not
        cy.get('#spanMessage').should('be.visible')
        cy.get('#spanMessage').then(function ($errorMsg) {
            cy.log($errorMsg.text())
        })


    });

    it('Valid username & Valid password', () => {

        cy.reload()
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        //verify login is success or not
        cy.get('#Subscriber_link').should('be.visible')

        //verify welcome message is displayed or not
        cy.get('#welcome').should('be.visible')

        cy.get('#welcome').then(function ($welcomeMsg) {
            cy.log($welcomeMsg.text())
        })

    });
    it('hover on first main menu (Admin)', () => {

        cy.contains('Admin').trigger('mouseover')
        cy.contains('User Management').trigger('mouseover')
        cy.get('#menu_admin_viewSystemUsers').click()

    });

});