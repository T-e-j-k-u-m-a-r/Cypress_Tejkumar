describe('Drag & Drop Demo', () => {

    before(function () {
        cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html')
    })

    it('TC01', () => {

        cy.get(`div#todrag > span:nth-child(2)`).drag('#mydropzone');
        cy.wait(3000)

    });


});