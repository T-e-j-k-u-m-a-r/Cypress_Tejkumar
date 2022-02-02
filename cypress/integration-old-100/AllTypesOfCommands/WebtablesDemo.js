describe('Handling web tables', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('TC01 - Printing total rows & columns', () => {

        //total rows
        cy.get('#table1>tbody>tr').should('have.length', 4)

        cy.get('#table1>tbody>tr').then(function (rows) {
            cy.log("Total row count :: " + rows.length)
        })

        //total columns
        cy.get('#table1>thead>tr>th').should('have.length', 6)
        cy.get('#table1>thead>tr>th').then(function (columns) {
            cy.log("Total columns count :: " + columns.length)
        })

    });

    it('TC02 - Printing all elements of web tables', () => {

        cy.get('#table1>tbody>tr').each(function ($row, index, $rows) {

            cy.wrap($row).within(function () {

                cy.get('td').each(function ($cell, index, $cells) {
                    cy.log($cell.text())
                })
            })

        })


    });

    it('TC03 - Printing all cell values of a single row', () => {

        cy.get('#table1>tbody>tr').eq(3).within(function () {
            cy.get('td').each(function ($cell, index, $cells) {
                cy.log($cell.text())
            })

        })

    });

    it.only('TC04 - Printing a cell value based on another cell value', () => {

        cy.contains('Doe').parent().within(function () {
            cy.get('td').eq(4).then(function ($cellValue) {
                cy.log($cellValue.text())
            })

        })

    });

});