describe('Demo', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('TC01-Simple Alert', () => {

        cy.on('window:alert', function ($alertText) {
            expect($alertText).eq('I am a JS Alert')
        })

        cy.contains(`Click for JS Alert`).click()

        //Assert the result post clicking on simple alert
        cy.get(`#result`).then(function (result) {
            cy.log("Result :: " + result.text())
        })

    });

    it('TC02-Confirm Alert', () => {

        cy.on('window:confirm', function ($alertText) {
            expect($alertText).eq('I am a JS Confirm')

            //Use the below loc for clicking on cancel button 
            //return false
        })

        cy.contains(`Click for JS Confirm`).click()

        //Assert the result post clicking on simple alert
        cy.get(`#result`).then(function (result) {
            cy.log("Result :: " + result.text())
        })


    });

    it.only('TC03-Prompt Alert', () => {

        cy.window().then(function ($win) {

            cy.stub($win, 'prompt').returns(null)

        })
        cy.contains(`Click for JS Prompt`).click();
        cy.get(`#result`).then(function (result) {
            cy.log("Result :: " + result.text())
        })

    });

});