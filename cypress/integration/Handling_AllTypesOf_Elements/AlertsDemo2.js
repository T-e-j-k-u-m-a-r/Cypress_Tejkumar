describe('Handling all types of alerts', () => {

    before(function () {
        cy.visit('/')
    })

    it('TC01- Simple Alerts', () => {

        cy.on('window:alert', function (alert) {
            expect(alert).eq('You clicked a button')
        })

        cy.get(`#alertButton`).click();
    });

    it('TC02- Confirm Alerts', () => {

        cy.on('window:confirm', function () {
            return false
        })

        cy.get(`#confirmButton`).click();
        cy.get('#confirmResult').then(function (result) {
            cy.log("Confirmation message :: " + result.text())
        })

    });

    it.only('TC03- Prompt Alerts', () => {


        cy.window().then(function ($win) {

            cy.stub($win, 'prompt').returns("Jeevitha Tejkumar")
            cy.get(`#promtButton`).click()

        })

        //Assert the results

        cy.get(`#promptResult`).then(function (alert) {

            cy.log(alert.text())


        })

    });

});