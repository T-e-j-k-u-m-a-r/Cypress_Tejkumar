describe('Select & Multi select Demo', () => {

    before(function () {
        cy.visit('https://skpatro.github.io/demo/signup/')
    })

    it('TC01', () => {

        cy.contains('Gender').scrollIntoView();
        cy.get('select[name="sgender"]').select('Female')
        cy.wait(2000)

        //Verify the selected option
        cy.get('select[name="sgender"]>option').eq(2).then(function ($value) {
            cy.log("Selected value :: " + $value.text())
            expect("Female").eq($value.text())
        })
    });

    it.only('TC02', () => {

        cy.get('select[id="tools"]').select(["QTP", "Selenium"])
        cy.get('select[id="tools"]').find("option:selected", "QTP")


    });

});