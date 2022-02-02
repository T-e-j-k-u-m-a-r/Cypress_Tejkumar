describe('Alerts Demo', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('TC01-Simple Alerts', () => {

        cy.on('window:alert', function ($text) {
            expect($text).eq(`I am a JS Alert`)
        })

        cy.contains(`Click for JS Alert`).click();
        //Assert the simple alert results
        cy.get(`#result`).should('have.text', 'You successfully clicked an alert')


    });

    it('TC02-Custom Alerts', () => {



        cy.on('window:confirm', function ($text) {
            expect($text).eq(`I am a JS Confirm`)

            //return false
        })

        cy.contains(`Click for JS Confirm`).click();
        //Assert the simple alert results
        cy.get(`#result`).should('have.text', 'You clicked: Ok')
        //cy.get(`#result`).should('have.text', 'You clicked: Cancel')
    });

    it.only('TC03-Prompt Alerts', () => {

        cy.window().then(function ($win) {

            //cy.stub($win, 'prompt').returns('Tejkumar Kempaiah')
            cy.stub($win, 'prompt').returns(null)

            cy.contains(`Click for JS Prompt`).click();
        })

        //Assert the result
        //cy.get(`#result`).should('have.text', 'You entered: Tejkumar Kempaiah')
        cy.get(`#result`).should('have.text', 'You entered: null')

    });

});