// ***********************************************************
// This example support/e2e.ts is processed and
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
import './commands';
import './exceptions';
require('cypress-xpath');
require('cy-verify-downloads').addCustomCommand();
import('cypress-real-events/support');

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    cy.session('mySession', () => {
        cy.visit(`${Cypress.env('demoQA')}login`)
        cy.get('#userName').type('alpha');
        cy.get('#password').type('@Dmin123');
        cy.get('#login').click();
        cy.url().should('contain','profile')
    })
});
after(() => {
    cy.clearCookies()
});