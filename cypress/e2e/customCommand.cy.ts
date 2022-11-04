Cypress.session.clearAllSavedSessions();

describe('basics', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}login`)
    });
    it('first attempt', () => {
        cy.login('alpha','@Dmin123')
        cy.url().should('contain','profile')
    });
    it('second attempt', () => {
        cy.login('alpha12', '@Dmin12312');
        cy.url().should('contain','login')
    });
});