describe('File Upload Demo', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('TC01', () => {

        cy.get(`#file-upload`).attachFile(`testData/bangalore.jpg`)
        cy.get(`#file-submit`).click();

        //verify if the upload is success or not
        cy.get(`#uploaded-files`).should('exist')


        //assert the uploaded file 
        cy.get(`#uploaded-files`).then(function (title) {
            expect(title.text()).contains('bangalore.jpg')
        })

    });


});