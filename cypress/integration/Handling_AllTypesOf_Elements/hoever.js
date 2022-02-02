describe('hover Demo', () => {

    before(function () {
        cy.visit('https://www.bikedekho.com/')
    })

    it('TC01', () => {

        ///Different way to show the hidden elements which can be interacted using hover
        cy.get(`a[title='Bikes']`).invoke('show')
        cy.wait(2000)
        cy.get(`a[title='Popular Brands']`).invoke('show')

        //click on a particular link

        cy.contains(`TVS Bikes`).click();
        cy.wait(2000)

        //verify if the URL has tvs bikes in it
        cy.url().should('include', 'tvs-bikes')
    });

});