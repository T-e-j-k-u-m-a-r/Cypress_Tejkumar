describe('Handling textbox', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01', () => {

        //print application URL
        cy.url().then(function (url) {
            cy.log(`Application URL :: ${url}`)
            expect('https://skpatro.github.io/demo/signup/').eq(url)

            expect(url).contains('skpatro.github.io')

        })

        //print application title
        cy.title().then(function (title) {
            cy.log(`Application title :: ${title}`)
            expect('Registration Form').eq(title)

            expect('Registration Form').contains('Form')
        })

    });


});