describe('Handling WebTables Demo', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/tables', { timeout: 3000 })
    })

    it.skip('Print total rows & columns', () => {

        //print total columns
        cy.get(`#table01>thead>tr>th`).should('have.length', 4)
        cy.get(`#table01>thead>tr>th`).then(function (columns) {
            cy.log('Total columns :: ' + columns.length)
        })

        //print total rows
        cy.get(`#table01>tbody>tr`).should('have.length', 3)

        cy.get(`#table01>tbody>tr`).then(function (rows) {
            cy.log('Total rows :: ' + rows.length)
        })

    });

    it('Print all values of a specific row', () => {

        cy.get('#table1> tbody > tr').eq(3).within(function () {
            cy.get('td').each(function ($td, index, $tds) {
                cy.log($td.text())

            })
        })


    });

    it('Print cell value based on some other cell value', () => {

        cy.contains('Conway').parent().within(function () {

            cy.get('td').eq(2).then(function ($cell) {
                cy.log("Email ID :: " + $cell.text())
            })

        })

    });


});