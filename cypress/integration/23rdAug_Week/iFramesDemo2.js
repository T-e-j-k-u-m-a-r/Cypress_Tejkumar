describe('IFrames Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#courses-iframe`).scrollIntoView()

        cy.get(`#courses-iframe`).its('0.contentDocument.body').xpath(`//h4[text()='Company Portfolio']`).then(function
            ($text) {
            cy.log("Text Data :: " + $text.text())
        })

    });


});