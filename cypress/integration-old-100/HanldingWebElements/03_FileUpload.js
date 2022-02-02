describe('File upload Demo', () => {

    before(function () {
        // cy.visit('https://skpatro.github.io/demo/signup/')
        cy.visit('https://blueimp.github.io/jQuery-File-Upload/')
    })

    it.skip('TC01', () => {

        //Attach the file
        cy.get(`input[name='datafile']`).attachFile('filesToBeUploaded/footballJersey.jpg')

        //Click on upload button

        //Verify if the upload is success or not


    });

    it.only('TC02', () => {

        //attach the file
        cy.get(`input[name='files[]']`).attachFile('filesToBeUploaded/footballJersey.jpg')

        //click on upload button
        cy.get(`button[class='btn btn-primary start']`).click({ multiple: true })

        cy.wait(3000)

        //verify if the upload is successful or not -> Assert 1
        cy.get(`span[class='size']`).should('contain.text', 'KB')

        //verify if the upload is successful or not -> Assert 2
        cy.get(`table[class='table table-striped']>tbody>tr>td>p>a`).should('have.text', 'footballJersey.jpg')

    })

});