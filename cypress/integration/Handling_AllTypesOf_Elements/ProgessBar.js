describe('Progess Bar Demo', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/horizontal_slider')
    })

    it('TC01', () => {

        //Move the progress bar to 3.5 value 
        cy.get(`input[type='range']`).invoke('val', 3.5).trigger('change')

        //Verify the value after modification
        cy.get(`span#range`).should('have.text', 3.5)
    });


});