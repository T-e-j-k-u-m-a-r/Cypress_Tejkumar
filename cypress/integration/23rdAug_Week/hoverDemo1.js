describe('Hover Demo', () => {

    before(function () {
        cy.visit('https://demoqa.com/tool-tips')
    })

    it('TC01', () => {

        cy.get(`#toolTipButton`).realHover()
        cy.wait(3000)


    });


});