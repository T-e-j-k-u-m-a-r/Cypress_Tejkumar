/*
Topic: Handling Iframes
Author: Tejkumar
*/

require('cypress-iframe')

describe('Handling iFrames', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/iframe')
    })

    it('TC01', () => {

        //Allow the specific frame to load
        cy.frameLoaded('#mce_0_ifr')

        //interact with iframe element
        cy.iframe().clear().type('Hello, This is topic of iframes...')


    });

});