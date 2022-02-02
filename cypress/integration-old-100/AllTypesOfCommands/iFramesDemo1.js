require('cypress-iframe')

describe('Handlign iframes', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/iframe')
    })

    it('TC01', () => {

        //load the iframe content
        cy.frameLoaded('#mce_0_ifr')

        //Type text on the iframe text box
        cy.iframe().clear().type('Hello, This section is iframe & its completed....')

    });

});