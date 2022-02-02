describe('Demo (dummy)', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })

    it('TC01', () => {

        cy.log(cy.get('#txtUsername'))

    });


});