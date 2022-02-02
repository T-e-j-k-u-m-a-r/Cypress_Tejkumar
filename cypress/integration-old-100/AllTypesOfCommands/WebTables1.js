describe('Handling Webtables', () => {

    before(function () {
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
    })

    it('TC01 : Get total rows & count in a table', () => {

        cy.get('#customers>tbody>tr').should('have.length', 7)
        cy.get('#customers>tbody>tr>th').should('have.length', 3)

        cy.get('#customers>tbody>tr').then(function ($rows) {

            cy.log('Total rows :: ' + $rows.length)

        })

        cy.get('#customers>tbody>tr').then(function ($columns) {

            cy.log('Total columns :: ' + $columns.length)

        })

    });

    //How to print whole table data

    it.only('Print whole web table data', () => {

        cy.get('#customers>tbody>tr').each(function ($row, index, $rows) {

            cy.wrap($row).within(function () {

                cy.get('th').each(function ($cell, index, $cells) {

                    cy.log($cell.text())
                })
            })
        })

    });





});