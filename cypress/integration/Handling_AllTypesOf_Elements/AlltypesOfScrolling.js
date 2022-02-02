describe('Scrolling Demo', () => {

    before(function () {
        cy.visit('https://www.w3schools.com/html/')
    })

    it('ScrollInto View till certain UI element', () => {


        cy.contains(`Get Certified »`).scrollIntoView();


    });

});