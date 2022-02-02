describe('File download Demo', () => {

    before(function () {

        cy.visit('http://demo.automationtesting.in/FileDownload.html')
    })

    it('TC01', () => {

        cy.downloadFile('https://github.com//sakinala/AutomationTesting/raw/master/samplefile.pdf', 'cypress/downloads', 'samplefile.pdf')
        //cy.verifyDownload('../../../downloads/samplefile.pdf')

        cy.verifyDownload('samplefile.pdf')

    });


});