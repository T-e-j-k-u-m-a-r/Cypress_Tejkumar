describe('Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01', () => {

        cy.contains('Automation Tools:').scrollIntoView()
        cy.get('#tools').select(["QTP", "Selenium"])

        //How to check if more than 2 values are selected or not
        cy.get('#tools').invoke('val').should('deep.equal', ['qtp', 'selenium'])

        cy.wait(2000)


    });


});