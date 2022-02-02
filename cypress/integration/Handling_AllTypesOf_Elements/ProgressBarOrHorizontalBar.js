describe('ProgressBar Demo', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/horizontal_slider')
    })

    it('TC01', () => {

        cy.get(`input[type='range']`).invoke('val', 3.5).trigger('change')

        cy.get(`#range`).should('have.text', 3.5)

    });


});