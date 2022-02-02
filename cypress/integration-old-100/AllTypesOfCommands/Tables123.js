describe('Handling webtables', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/tables')
    })

    it('TC01 - Print whole table', () => {

        cy.get('#table1>tbody>tr').each(function ($row, index, $rows) {

            cy.wrap($row).within(function () {
                cy.get('td').each(function ($cell, index, $cells) {
                    cy.log($cell.text())
                })
            })

        })

    });

    it('TC02 - Print 2nd row all data', () => {

        cy.get('#table1>tbody>tr').eq(1).within(function () {
            cy.get('td').each(function ($cell, index, $cells) {
                cy.log($cell.text())
            })
        })

    });

    it.only('Print a cell value based on another cell value in the same row', () => {

        cy.contains('Doe').parent().within(function () {
            cy.get('td').eq(2).then(function ($emailID) {
                cy.log($emailID.text())
            })
        })

    });

});