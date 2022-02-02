describe('Handling Alerts', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    });

    it('TC01-Simple Alerts', () => {


        cy.on("window:alert", function (alertText) {
            cy.log("Simple Alert message :: " + alertText)
            cy.contains('Click for JS Alert').click()
        })


    });

    it('TC02-Confirm Alerts', () => {


        cy.on("window:confirm", function (confirmAlertText) {
            cy.log("Confirm alert message :: " + confirmAlertText)
            cy.contains('Click for JS Confirm').click()
        })


    });


    it('TC03-Prompt Alerts', () => {

        cy.window().then(function ($win) {

            cy.stub($win, 'prompt').returns("Hello Cypress")
            cy.contains('Click for JS Prompt').click()

        })

    });


});