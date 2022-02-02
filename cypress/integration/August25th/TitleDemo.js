describe('Title Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.title().then(function ($appTitle) {
            cy.log('Application title :: ' + $appTitle)

            expect($appTitle).eq('Automation Practice – CodenBox AutomationLab')
        })

    });


});