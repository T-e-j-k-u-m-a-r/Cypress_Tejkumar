describe('All type sof selects demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('Single select', () => {

        cy.contains('Gender').scrollIntoView();
        cy.get(`select[name = 'sgender']`).select('Male')

        //verify the selected value 
        cy.get(`select[name = 'sgender']`).should('have.value', 'male')
        cy.get(`select[name = 'sgender']`).find(':selected', 'Male')
    });

    it('Multi select', () => {

        cy.get(`select#tools`).select(['QTP', 'Selenium'])

        cy.get(`select#tools`).find('option:selected', ['qtp', 'selenium'])


    });

});