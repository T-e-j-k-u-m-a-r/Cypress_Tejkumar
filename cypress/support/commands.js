// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//Important Note: 
Cypress.Commands.add('Utility_Login', (email, password) => {

    cy.log('This is login utility')

})

Cypress.Commands.add('Utility_handleSimpleAlert', function () {

    cy.log('This is handling simple alerts utility')

})

Cypress.Commands.add('Utility_handleCustomAlert', function () {

    cy.log('This is handling custom alerts utility')

})

Cypress.Commands.add('handlePromptAlert', function () {


})

Cypress.Commands.add('Utility_handleWebtable', function () {


})


Cypress.Commands.add('Utility_fileDownload', function () {


})

Cypress.Commands.add('Utility_fileUpload', function () {


})

Cypress.Commands.add('Utility_URL', function () {


})

Cypress.Commands.add('Utility_title', function () {


})

Cypress.Commands.add('Utility_SingleSelect', function () {


})

Cypress.Commands.add('Utility_MultiSelect', function () {


})

Cypress.Commands.add('Utility_ProgressBar', function () {


})

Cypress.Commands.add('Utility_Checkbox', function () {


})

Cypress.Commands.add('Utility_RadioButton', function () {


})

Cypress.Commands.add('Utility_Link', function () {


})

Cypress.Commands.overwrite('Utility_Login', () => {

    cy.log('This is overwritten login utility')

})

Cypress.Commands.add('Utlity_mhover', () => {

    cy.log('This is mhover utility')

})

Cypress.Commands.add('Utlity_doubleClick', () => {

    cy.log('This is double click utility')

})

Cypress.Commands.add('Utlity_rightClick', () => {

    cy.log('This is rightClick utility')

})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.overwrite('type', function () {

//     cy.log(`Tejkumar's Defined Exception`)

// })




require('cypress-file-upload');
require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand()
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

