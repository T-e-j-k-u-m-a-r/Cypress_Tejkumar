describe('Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01', () => {

        //scroll till automation tools element
        cy.contains('Automation Tools:').scrollIntoView()

        // cy.get('#tools').select('qtp').find('option:selected', "QTP")

        cy.get('#tools').select(['QTP', 'JMeter'])

        cy.get('#tools').find('option:selected').should('contain', 'QTP')
        cy.get('#tools').find('option:selected').should('contain', 'JMeter')
        cy.get('#tools').find('option:selected').should('contain', 'CodedUI')

        cy.wait(2000)


    });


});