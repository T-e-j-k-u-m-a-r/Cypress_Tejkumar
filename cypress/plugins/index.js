/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }


/// <reference types="@shelex/cypress-allure-plugin" />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import * as allureWriter from "@shelex/cypress-allure-plugin/writer";


const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { isFileExist } = require('cy-verify-downloads');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const selectTestsWithGrep = require('cypress-select-tests/grep')

module.exports = (on, config) => {
  on('task', { downloadFile })
  on('task', { isFileExist })
  allureWriter(on, config);

  on('file:preprocessor', selectTestsWithGrep(config))

  config = cypressBrowserPermissionsPlugin(on, config)
  require('cypress-grep/src/plugin')(config)

  return config;

}
