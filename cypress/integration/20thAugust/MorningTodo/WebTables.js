describe('Handling Webtables Demo', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('TC01-Print total rows & columns in a table', () => {

        cy.get(`#table1`).then(function (rows) {
            cy.log(`Total rows in the table : ${rows.length}`)
        })

        cy.get(`#table1 > thead > tr >th`).then(function (columns) {
            cy.log(`Total columns in the table : ${columns.length}`)
        })


    });

    it('TC02-Print all cell values in a table', () => {

        cy.get(`#table1>tbody>tr`).each(function () {

            cy.get('td').each(function ($cell) {

                cy.log($cell.text())

            })
        })

    });

    it('TC03-Print all the cell values in a given row', () => {

        cy.get(`#table1>tbody>tr`).eq(3).within(function () {
            cy.get(`td`).each(function ($cell) {

                cy.log($cell.text())

            })
        })

    });

    //Note: within() method is used to lock a row or cell 

    it.only('TC04-Print a cell value based on another cell value', () => {

        cy.contains(`Bach`).parent().within(function () {
            cy.get(`td`).eq(2).then(function ($cell) {
                cy.log($cell.text())
            })
        })

    });

});