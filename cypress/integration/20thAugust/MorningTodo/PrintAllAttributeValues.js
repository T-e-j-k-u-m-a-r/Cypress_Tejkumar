describe('Print all attribute value of an element Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01', () => {

        cy.get(`#username`).then(function (ele) {
            cy.log(`Class value = ` + ele.attr('class'));
            cy.log(`Name value = ` + ele.attr('name'));
            cy.log(`type value = ` + ele.attr('type'));
            cy.log(`id value = ` + ele.attr('id'));

        })


    });


});