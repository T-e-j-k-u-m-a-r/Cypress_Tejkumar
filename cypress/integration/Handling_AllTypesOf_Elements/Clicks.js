describe('Clicks Demo', () => {

    before(function () {
        //cy.visit('https://skpatro.github.io/demo/')
        cy.visit('https://demoqa.com/buttons')
    })

    it.skip('TC01', () => {

        cy.contains('SignUp Form').click()
        cy.go(-1)
        cy.contains('WebTable').click()
        cy.go(-1)
        cy.contains('iFrames').click()
        cy.go(-1)
        cy.contains('Alerts').click()
        cy.go(-1)
        cy.contains('Links').click()
        cy.go(-1)
        cy.contains('DragnDrop').click()
        cy.go(-1)
    });

    it('TC02 - Context Click or Right Click', () => {

        cy.contains('Right Click Me').rightclick()
        cy.get('#rightClickMessage').then(function ($confirmationMsg) {
            cy.log('Confirmation message :: ' + $confirmationMsg.text())
        })

    });

    it('TC03 - Double Click', () => {
        cy.contains('Double Click Me').trigger('dblclick')

        //print the confirmation message
        cy.get('#doubleClickMessage').then(function ($confirmationMsg) {
            cy.log('Confirmation message :: ' + $confirmationMsg.text())
        })

    });

    //Simple click on message validation is not working for this case. 
    it.only('TC04 - Simple Click', () => {
        cy.contains('Click Me').click()

        cy.get(`p#dynamicClickMessage`).then(function ($confMsg) {
            cy.log('Confirmation message :: ' + $confMsg.text())
        })
    });

});