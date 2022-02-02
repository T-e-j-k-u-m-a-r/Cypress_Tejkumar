describe('Print attributes of an Demo (e2e)', () => {

    before(function () {
        cy.visit('https://demoqa.com/text-box')
    })

    it('TC01', () => {

        cy.get('#userName').then(function (ele) {
            cy.log("class value :: " + ele.attr('class'))
        })


    });

});