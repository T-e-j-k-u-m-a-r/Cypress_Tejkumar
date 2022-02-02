require('cypress-file-upload')

describe('File upload', () => {
    before(function () {
        cy.visit("https://the-internet.herokuapp.com/upload");
    })


    it('TC02', function () {

        cy.get('#file-upload').attachFile('fileToBeUploaded/bangalore.jpg')
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('bangalore.jpg')

    })

});