describe('Clicks Demo', () => {

    before(function () {
        cy.visit('https://demoqa.com/buttons')
    })

    it('Double Click', () => {

        cy.contains(`Double Click Me`).trigger('dblclick')

        //verify the text displayed on the screen
        //Display the confirmation message
        cy.get(`#doubleClickMessage`).then(function ($textMsg) {
            cy.log($textMsg.text())
            expect($textMsg.text()).eq(`You have done a double click`)
        })

    });

    it('Right Click', () => {

        cy.contains(`Right Click Me`).rightclick()

        //verify the text displayed on the screen
        //Display the confirmation message
        cy.get(`#rightClickMessage`).then(function ($textMsg) {
            cy.log($textMsg.text())
            expect($textMsg.text()).eq(`You have done a right click`)
        })

    });

});