/*
Objective: All mouse operations
App URL: https://skpatro.github.io/demo/
Author: Tejkumar
*/

describe('Demo', () => {

    before(function () {
        // cy.visit('https://skpatro.github.io/demo/')
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')

    })

    it.skip('Title Verification', () => {
        cy.get('li:nth-child(6) > b > a').click()
        cy.title().should('eq', 'DragnDrop')


    });

    it.skip('Drag & Drop', () => {

        cy.get('#draggable').drag('#droppable')
        cy.wait(2000)

    });

    it('TC01', () => {
        cy.wait(5000)
        cy.get('#gallery>li').eq(2).drag('#trash')

    });

});

