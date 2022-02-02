describe('Radio Button Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01', () => {

        //Scroll till Years of Experience: Web element
        cy.contains('Years of Experience:').scrollIntoView();

        //verify radio button before selecting
        cy.get(`input[value = 'three']`).should('be.not.checked')

        //select a radio button
        cy.get(`input[value = 'three']`).click();

        //verify radio button after selecting
        cy.get(`input[value = 'three']`).should('be.checked')

    });

});