describe('Sign up form filling', () => {

    before(function () {
        cy.visit('/')
    })

    it('Verify title & url contents', () => {

        //verify page title
        cy.title().then(function (title) {
            cy.log('Application title :: ' + title)
            expect(title).eq('Registration Form')
        })


        //verify if the url has the protocol http
        // verify if the url has the domain mentioned in the requirement
        cy.location().should((location) => {

            expect(location.href).to.eq('https://skpatro.github.io/demo/signup/')
            expect(location.hostname).to.eq('skpatro.github.io')
            expect(location.origin).to.eq('https://skpatro.github.io')
            expect(location.pathname).to.eq('/demo/signup/')
            expect(location.protocol).to.eq('https:')

        })

    });

    it('Form filling and submission', () => {


        cy.get('#username').type('Tejkumar')
        cy.get('#email').type('#tejguddigerekempaiah@gmail.com')
        cy.get('#tel').type('8553314778')

        //check if the fax text box is disabled
        cy.get('#fax').should('be.disabled')


        //file upload
        cy.get(`input[name='datafile']`).attachFile('testData/footballJersey.jpg')

        cy.get(`select[name='sgender']`).select('Male')

        cy.get(`input[value='six']`).click()
        cy.get(`input[value='six']`).should('be.checked')


        cy.get(`input[value='Selenium']`).click()
        cy.get(`input[value='Selenium']`).should('be.checked')

        cy.get('#tools').select(['QTP', 'JMeter'])

        //verify the selected values in the multi select
        cy.get('#tools').find('option:selected').should('contain', 'QTP')
        cy.get('#tools').find('option:selected').should('contain', 'JMeter')

        cy.get(`input[class='btn'][type='submit']`).click();

        //Handle simple alert post clicking on submit button
        cy.on('window:alert', function (alertText) {
            expect(alertText).eq('Registration Done!')

        })

        cy.log('Registration successful...')
    });

});