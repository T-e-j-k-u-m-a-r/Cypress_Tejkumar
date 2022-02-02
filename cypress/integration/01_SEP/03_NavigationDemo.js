describe('Navigation Demo (e2e)', () => {

    before(function () {
        cy.visit('https://en.wikipedia.org/wiki/SMS')
    })

    it('TC01', () => {

        cy.url().then(function (link1) {
            cy.log('URL 1 :: ' + link1)
        })

        //click on a link

        cy.contains(`Create account`).click()
        cy.wait(3000)


        cy.url().then(function (link2) {
            cy.log('URL 2 :: ' + link2)
        })
        //Navigate back
        cy.go(-1)


    });


});