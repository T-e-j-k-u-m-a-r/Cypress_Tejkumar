describe('Print attribute value Demo', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('TC01', () => {

        //cy.get() gives you an element in had, And then using it you can play around with it. 
        cy.get(`#btnLogin`).then(function (object) {
            cy.log("Value = " + object.attr('value'))
            cy.log("name = " + object.attr('name'))
            cy.log("type = " + object.attr('type'))
        })
    });


});