describe('Handling Frames Demo', () => {

    before(function () {
        cy.visit('https://demoqa.com/frames')
    })

    it.only('TC01', () => {

        cy.frameLoaded

        cy.iframe('#frame1').then(function (text) {
            cy.log("Text in the frame :: " + text)
        })

    });


});