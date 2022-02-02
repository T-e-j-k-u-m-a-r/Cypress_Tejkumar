describe('Print Attriibute Values Demo', () => {

    before(function () {
        cy.visit('https://demoqa.com/text-box')
    })

    it('TC01', () => {

        cy.get(`#userName`).then(function (ele) {
            cy.log('Autocomplete value :: ' + ele.attr('autocomplete'))
            cy.log("Placeholder value :: " + ele.attr('placeholder'))
            cy.log('Class value :: ' + ele.attr('class'))
            cy.log('Type value :: ' + ele.attr('type'))
        })

    });


});