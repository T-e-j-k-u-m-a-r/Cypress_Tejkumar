describe('Hover Demo', () => {

    before(function () {
        cy.visit('https://demoqa.com/tool-tips')
    })

    it('TC01', () => {

        cy.get(`#toolTipButton`).trigger('mouseover')

        cy.wait(5000)

        cy.log('Performed hover successfully')

    });


});