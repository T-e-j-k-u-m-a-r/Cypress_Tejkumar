describe('Slider Demo', () => {

    before(function () {
        cy.visit('https://demoqa.com/slider')
    })

    it('Verify default slider value', () => {

        //Print the default value at the slider
        cy.get(`#sliderValue`).should('have.value', 25)

    });

    it('Set slider value to 45 and verify the same', () => {

        cy.get(`#sliderValue`).invoke('val', 90).trigger('change')


    });


});