describe('Handling Alerts Demo', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Simple Alert', () => {

        cy.on('window:alert', function ($alert) {
            expect($alert).eq('I am a JS Alert')
        })

        cy.contains(`Click for JS Alert`).click();
        cy.get(`#result`).should('have.text', 'You successfully clicked an alert')

    });

    it('Custom Alert', () => {
        cy.on('window:confirm', function ($alert) {
            expect($alert).eq('I am a JS Confirm')
            return false;
        })

        cy.contains(`Click for JS Confirm`).click();
        //cy.get(`#result`).should('have.text', 'You clicked: Ok')

        cy.get(`#result`).should('have.text', 'You clicked: Cancel')

    });

    it.only('Prompt Alert', () => {

        cy.window().then(function ($win) {

            cy.stub($win, 'prompt').returns('Handling prompt alert')

        })

        cy.contains(`Click for JS Prompt`).click();

        //Print & Verification of result needs to be added
        cy.get(`#result`).then(function (msg) {

            cy.log("Prompt alert message :: " + msg.text())
            expect(msg.text()).eq('You entered: Handling prompt alert')
        })



    });

    it('Time based Alert', () => {




    });

});