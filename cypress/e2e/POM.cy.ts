import {LoginPage} from '../pages/Login';

Cypress.session.clearAllSavedSessions();

describe('basics', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}login`)
    });
    it('Success login', () => {
        LoginPage.submitLogin('alpha', '@Dmin123');
        cy.url().should('contain', 'profile')
        cy.get('.main-header').should('contain.text', 'Profile')
    });
    it('Wrong login', () => {
        LoginPage.submitLogin('alpha12', '@Dmin12312')
        cy.url().should('not.contain', 'profile');
        LoginPage.messageElement.should('have.text', 'Invalid username or password!');

    });
});