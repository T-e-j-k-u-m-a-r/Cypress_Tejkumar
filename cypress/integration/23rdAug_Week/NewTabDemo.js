describe('Opening new tabs Demo', () => {

    before(function () {
        cy.visit('http://codenboxautomationlab.com/practice/#top')
    })

    it('TC01- Handling new tabs', () => {

        //click on open new tab by removing the attribute which opens the new tab
        cy.get(`#opentab`).invoke('removeAttr', 'target').click()

        cy.wait(3000)


    });

});