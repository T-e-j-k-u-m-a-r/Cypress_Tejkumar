describe('Handling Alerts Demo', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })

    it('TC01 - Simple Alert', () => {

        cy.on('window:alert', function (alertText) {
            //cy.log('AlertText :: ' + alertText)
            expect(alertText).eq('I am a JS Alert')
        })

        cy.contains(`Click for JS Alert`).click()
        cy.get(`#result`).should('have.text', 'You successfully clicked an alert')

    });

    it('TC02 - Custom Alert', () => {

        cy.on('window:confirm', function (alertText) {
            //cy.log('AlertText :: ' + alertText)
            //expect(alertText).eq('I am a JS Confirm')
            return false;
        })

        cy.contains(`Click for JS Confirm`).click()
        //cy.get(`#result`).should('have.text', 'You clicked: Ok')
        cy.get(`#result`).should('have.text', 'You clicked: Cancel')

    });

    it('TC03 - Prompt Alert', () => {


        cy.window().then(function ($win) {

            //cy.stub($win, 'prompt').returns('Hello Everyone, Its cypress here..')
            cy.stub($win, 'prompt').returns(null)
            cy.contains(`Click for JS Prompt`).click()


        })

        //cy.get(`#result`).should('have.text', 'You entered: Hello Everyone, Its cypress here..')
        cy.get(`#result`).should('have.text', 'You entered: null')

    });

});