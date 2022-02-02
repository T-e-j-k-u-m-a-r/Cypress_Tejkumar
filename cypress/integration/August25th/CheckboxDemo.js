describe('Checkbox Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#checkbox-example`).scrollIntoView();

        //Click on check box 
        cy.get(`#checkBoxOption1`).check();

        //verify the if the checkbox is checked or not
        cy.get(`#checkBoxOption1`).should('be.checked')

        cy.wait(3000)

        //Click on un-check box 
        cy.get(`#checkBoxOption1`).uncheck();

        //verify the if the checkbox is un-checked or not
        cy.get(`#checkBoxOption1`).should('not.be.checked')


    });

});