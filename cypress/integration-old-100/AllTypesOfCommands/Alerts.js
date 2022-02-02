describe('Handling Alerts', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })

    it('TC01', () => {


        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('I am a JS Alert')
        })

        cy.contains('Click for JS Alert').click()

        cy.get('#result').contains('You successfully clicked an alert')

        cy.wait(2000)
    });

    it('TC02', () => {

        cy.on('window:confirm', function (alertText) {
            expect(alertText).eq('I am a JS Confirm')

            return false;
        })

        cy.contains('Click for JS Confirm').click()

        cy.get('#result').contains('You clicked: Cancel')
        cy.wait(2000)

    });

    it('TC03', () => {

        cy.window().then(function ($win) {

            cy.stub($win, 'prompt').returns("Hello, Prompt alert... How are you?")
            cy.contains('Click for JS Prompt').click();
            cy.get('#result').contains('You entered: Hello, Prompt alert... How are you?')

        })

        cy.wait(2000)

    });

});