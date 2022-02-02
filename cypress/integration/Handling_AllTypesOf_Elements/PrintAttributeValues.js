describe(`Print an element's attribute value Demo`, () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('TC01', () => {

        cy.get(`#txtUsername`).then(function (ele) {
            cy.log('id :: ' + ele.attr('id'))
            cy.log('name :: ' + ele.attr('name'))
            cy.log('class :: ' + ele.attr('class'))
            cy.log('type :: ' + ele.attr('type'))

        })

    });


});