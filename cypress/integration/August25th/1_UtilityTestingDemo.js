describe('Utility Demo', () => {


    before(function () {
        cy.visit(`https://opensource-demo.orangehrmlive.com/`)
    })

    it('TC01', () => {


        cy.get(`#txtUsername`).type('Admin')

    });


});