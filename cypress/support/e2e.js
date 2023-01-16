// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-cucumber-attach-screenshots-to-failed-steps"
// Alternatively you can use CommonJS syntax:
// require('./commands')
// const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
// Cypress.on('uncaught:exception', (err) => {
//   /* returning false here prevents Cypress from failing the test */
//   if (resizeObserverLoopErrRe.test(err.message)) {
//     return false;
//   }
// })
// Cypress.Commands.overwrite('should', (originalFn, actual, assertion, expected, options) => {
//     if (options && options.message) {
//       cy.removeAllListeners('fail') // remove all 'fail' listeners
//       // And we're starting from fresh!
//       cy.on('fail', (error, runnable) => {
//         error.name = 'CustomError'
//         error.message = options.message
//         throw error // throw error to have test still fail
//       })
//     }
//     return originalFn(actual, assertion, expected, options)
//   })
//   Cypress.Commands.overwrite('should', (originalFn, actual, assertion, expected, options) => {
//     if (options && options.message) {
//       const listener = (error, runnable) => {
//         error.name = 'CustomError'
//         error.message = options.message
//         throw error // throw error to have test still fail
//       } 
//       const removeListener = () => {
//         cy.removeListener('fail', listener)
//         cy.removeListener('command:end', removeListener)
//       }
//       cy.on('fail', listener)
//       cy.on('command:end', removeListener)
//     } 
//     return originalFn(actual, assertion, expected, options)
//   })