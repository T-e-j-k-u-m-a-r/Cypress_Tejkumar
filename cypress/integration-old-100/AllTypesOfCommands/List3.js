/*

Handling windows Alerts

1. Simple Alerts
2. Confirmation Alerts
3. Prompt Alerts

*/



describe('Types of Alerts', () => {

    beforeEach(function () {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    });

    it('Scenario 1', () => {

        cy.on("window:alert", function (alertText) {
            //expect(alertText).equals('I am a JS Alert')
            console.log("Alert text is :: " + alertText.toString())

        })
        cy.contains('Click for JS Alert').click()

    });

    it('Scenario 2', () => {

        cy.on("window:confirm", function (confirmAlertText) {
            console.log('confirm alert is :: ' + confirmAlertText)

            return true;

        })
        cy.contains('Click for JS Confirm').click()

    });

    it('Scenario 3', () => {

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Hello,Tejkumar')
            cy.contains('Click for JS Prompt').click()
        })

    });

});