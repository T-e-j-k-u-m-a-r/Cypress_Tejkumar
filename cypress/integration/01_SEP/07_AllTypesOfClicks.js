describe('All types of clicks Demo (smoke)', () => {

    before(function () {
        cy.visit(`https://demoqa.com/buttons`)
    })

    it('Right Click & Double Click Demo', () => {
        cy.get(`#rightClickBtn`).rightclick()
        cy.wait(2000)

        cy.get(`#doubleClickBtn`).dblclick()
        cy.wait(2000)

    });


});