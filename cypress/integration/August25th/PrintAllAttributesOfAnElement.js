describe('Print all attribute values of an element in Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01', () => {

        cy.get(`.search-input`).then(function (ele) {
            cy.log('type ::' + ele.attr('type'))
            cy.log('placeholder ::' + ele.attr('placeholder'))
            cy.log('class ::' + ele.attr('class'))
        })

    });


});