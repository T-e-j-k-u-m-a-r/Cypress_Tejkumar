describe('Handling Web Tables', () => {

    before(function () {
        cy.visit('http://the-internet.herokuapp.com/tables')

    })

    it('Print application title', () => {

        cy.url().title().then(function (title) {
            cy.log("Applicaiton title :: " + title)
            expect('The Internet').to.be.equals(title)
        })

    });

    it('Print whole table values', () => {

        cy.get('#table1>tbody>tr').each(function ($row, index, $rows) {

            cy.wrap($row).within(function () {

                cy.get('td').each(function ($td, index, $tds) {

                    cy.log($td.text())

                })

            })

        })



    });

    it('Print total rows', () => {

        cy.get('#table1>tbody>tr').should('have.length', 4)



    });

    it('Print total columns', () => {

        cy.get('#table1>thead>tr>th').should('have.length', 6)

    })

    it('Get specific cell value based on another cell value', () => {

        cy.contains('Conway').parent().within(function () {
            cy.get('td').eq('2').should
                ('have.text', 'tconway@earthlink.net')
        })
    });

    //print all cell values of third row
    it.only('Print all cell values of 3rd row', () => {

        cy.get('#table1>tbody>tr').eq(2).within(function () {
            cy.get('td').each(function ($td, index, $tds) {
                cy.log($td.text())
            })
        })

    });

});