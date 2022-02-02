
describe('Download File Test', () => {

    it('TC01', () => {

        //download the file
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'cypress/downloads', 'example.jpg')

        //YevHen's NPM Package 
        //verify if the file is downloaded or not

        cy.verifyDownload('example.jpg');

    });

});