describe('File Upload Demo', () => {

    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it.only('TC01', () => {


        //Attach the file
        cy.get(`#file-upload`).attachFile('August20thTestData/dolphin.jpg');

        //Click on Upload button
        cy.get(`#file-submit`).click()

        //Verify if the upload is success or not
        cy.get(`#uploaded-files`).contains('dolphin.jpg')

    });

});