
describe('Cafe TownSend', () => {

    before(function () {
        cy.visit('http://cafetownsend-spine.herokuapp.com/#/')
    })

    it('Login Test', () => {

        cy.get(`input[name='username']`).type('Luke')
        cy.get(`input[name='password']`).type('Skywalker')
        cy.get('.main-button').last().click()

        cy.url().should('contain', 'employees')
    });

    it('Create new user', () => {

        cy.get('#bAdd').click()

        cy.get(`input[name='firstName']`).type('Brad')
        cy.get(`input[name='lastName']`).type('Pit')
        cy.get(`input[name='startDate']`).type('01-01-2021')
        cy.get(`input[name='email']`).type('bardpit@gmail.com')
        cy.get(`.main-button`).last().click()

        //check if the new user is created in the users list or not
        cy.contains('Brad Pit').should('be.visible')

    });

    it('Update existing user', () => {

        //click on  a user
        cy.contains('Brad Pit').click()

        //click on edit button
        cy.contains('Edit').click()

        //select brad pit & update to matt hardy
        //Cypress.$(`input[name='firstName']`).trigger('clear');

        cy.get(`input[name='firstName']`).clear({ force: true })
        cy.get(`input[name='firstName']`).clear({ force: true }).last().type('Tejkumar', { force: true })

        cy.get(`input[name='lastName']`).clear({ force: true })
        cy.get(`input[name='lastName']`).clear({ force: true }).last().type('Kempaiah', { force: true })

        //click on save button
        cy.get(`.main-button`).last().click({ force: true })

        //check if the updated user is visible in the users list or not
        cy.contains('Tejkumar Kempaiah').should('be.visible')

    });

    it('Delete an user', () => {

        //click on Tejkumar user 
        cy.contains('Tejkumar Kempaiah').click()

        //click on delete button
        cy.contains('Delete').click()

        //verify if Tejkumar user is not found in the list
        cy.xpath(`//li[contains(text(),'Tejkumar
        Kempaiah')]`).should('not.exist')

    });


});