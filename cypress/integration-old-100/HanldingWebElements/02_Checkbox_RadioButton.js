describe('Checkbox & Radio button Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01-Checkbox', () => {


        //Scroll till SKills section in the page
        cy.contains('Skills').scrollIntoView()

        //Assert total checkbox are 5 or not
        cy.get('input[type="checkbox"]').should('have.length', 5)

        //print total checkbox in a page
        cy.get('input[type="checkbox"]').then(function (checkboxes) {

            cy.log("Total checkbox = " + checkboxes.length)

        })

        //select single checkboxes
        cy.get('input[value="TestingBasics"]').click()


        //select multiple checkboxes
        cy.get("input[value='C#']").click()
        cy.get("input[value='HTML']").click()

        cy.wait(2000)

        //Verify if the values are selected or not
        cy.get('input[value="TestingBasics"]').should('be.checked')

    });

    it('TC02-Radio Button', () => {
        //print total radio buttons
        cy.get("input[type='radio']").should('have.length', 8)

        //assert total radio buttons
        cy.get("input[type='radio']").then(function ($radiobuttons) {
            cy.log('Total radio buttons :: ' + $radiobuttons.length)
        })

        //select single radio button 
        cy.get(`input[value='four']`).click()

        //assert the selected radio button
        cy.get(`input[value='four']`).should('be.checked')
    });
});