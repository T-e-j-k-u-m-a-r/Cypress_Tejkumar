describe('File download Demo', () => {

    it('TC01', () => {

        //Download the file into cypress downloads folder
        cy.downloadFile('https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf', 'cypress/downloads', 'samplefile.pdf')

        //Verify if the download is successful or not
        cy.verifyDownload('samplefile.pdf')
    });


});