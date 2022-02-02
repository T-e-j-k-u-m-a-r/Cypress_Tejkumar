describe('Get Text of a Web Element', () => {

    it('TC01', () => {

        cy.visit("/")
        cy.url().title(function (appTitle) {
            cy.log("Application title :: " + appTitle)
        })

    });

    it('TC02', () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.get("#cars").select(["Volvo", "Audi"])


    });

    it('TC03', () => {

        //Scrolling vertical

        //Scrolling horizontal

    });

    it.only('TC04', () => {

        cy.visit('http://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').children().then(function (elements) {
            cy.log("Total child elements in the dropdown :: " + elements.length)

        })

        cy.get("#dropdown").children().first().then(function (ele) {
            cy.log("The first element in the drop down is :: " + ele.text())
        })

        cy.get("#dropdown").children().then(function (ele) {
            cy.log("Element text :: " + ele.text())

        })

    });

});