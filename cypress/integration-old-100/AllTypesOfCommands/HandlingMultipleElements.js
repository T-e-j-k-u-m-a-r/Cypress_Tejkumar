describe('Handling multiple elements', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('should behave...', () => {

        //login to app
        cy.get('#txtUsername').type('Admin')
        cy.get('#divPassword').type('admin123')
        cy.get('#btnLogin').click();

        //click on Directory main menu
        cy.contains('Directory').click()

        //Get the count of list of 
        cy.get('li>b').then(function (elements) {
            cy.log("Total directors :: " + elements.length)
        })

        //Print the name of the last director from the list
        cy.get('li>b').eq(-1).then(function (director) {
            cy.log("Last director name :: " + director.text())
        })

        //Print the name of first director from the list
        cy.get('li>b').eq(0).then(function (director) {
            cy.log("First director name :: " + director.text())
        })

    });

});