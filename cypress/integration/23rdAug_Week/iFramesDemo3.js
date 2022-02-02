describe('iFrames Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`#mousehover`).scrollIntoView();

        cy.get(`#courses-iframe`).its(`0.contentDocument.body`).find(`div > h4[class = 'title']`).eq(0).then(function ($text) {
            cy.log(`Text :: ` + $text.text())
        })

    });


});