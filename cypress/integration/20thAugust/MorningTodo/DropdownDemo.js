describe('Single Select & Multi Select Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01 - Single Select', () => {

        //cy.viewport('samsung-s10')

        cy.contains(`Gender`).scrollIntoView()

        cy.get(`select[name='sgender']`).select('Female')

        cy.wait(2000)

        cy.get(`select[name='sgender']`).find('option:selected', 'Female')

    });

    it.only('TC02 - Multi Select', () => {

        cy.get(`#tools`).select(['QTP', 'JMeter'])

        cy.get(`#tools`).find('option:selected').should('contain', 'QTP')

        cy.get(`#tools`).find('option:selected').should('contain', 'JMeter')


    });


});