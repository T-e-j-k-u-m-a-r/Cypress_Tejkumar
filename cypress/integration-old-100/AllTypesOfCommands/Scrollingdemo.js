/*

Topic: Scrolling
Author: Tejkumar

*/

describe('Handling all types of scrolling', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })
    it('TC01', () => {

        cy.contains('Automation Tools:').scrollIntoView()
        cy.wait(5000)


    });

    it('TC02', () => {
        cy.reload()
        cy.wait(5000)
        cy.scrollTo(0, 500)

    });


});