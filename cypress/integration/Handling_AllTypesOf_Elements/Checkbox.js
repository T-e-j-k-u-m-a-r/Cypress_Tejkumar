describe('Check box Demo', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/checkboxes')
    })

    it('Check if the checkbox is selected or not', () => {

        //check if the first checkbox is selected or not
        cy.get('#checkboxes > input').eq(0).should('be.not.checked')

        cy.log('Checkbox 1 is selected by default...')

    });

    it('UnCheck the checkbox and verify the same', () => {

        //Verification before unchecking
        cy.get('#checkboxes > input').eq(1).should('be.checked')

        cy.get('#checkboxes > input').eq(1).click()

        //check if the second checkbox is selected or not
        cy.get('#checkboxes > input').eq(1).should('be.not.checked')

    });


});