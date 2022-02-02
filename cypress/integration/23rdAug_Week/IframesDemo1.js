context('Handling iFrames', function () {

    before(function () {

        cy.visit('https://skpatro.github.io/demo/iframes/')
    })

    it('TC01', () => {

        cy.get(`#frame1`).its('0.contentDocument.body').find(`#sampleHeading`).then(function ($text) {
            cy.log(`Frame 1 text :: ` + $text.text())
        })

    });

    it.only('TC02', () => {
        //click on category1 link inside iframe1
        cy.get('#Frame1').its('0.contentDocument.body').find('#frametext').then(function ($frameText) {
            cy.log(`Frame1 text :: ` + $frameText.text())
        })

    });
})