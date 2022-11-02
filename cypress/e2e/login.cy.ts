Cypress.session.clearAllSavedSessions();

describe('basics', () => {
    beforeEach(() => {
        cy.session('mySession', () => {
            cy.visit(`${Cypress.env('demoQA')}login`)
            cy.get('#userName').type('alpha');
            cy.get('#password').type('@Dmin123');
            cy.get('#login').click();
            cy.url().should('contain','profile')
        })
    });
    it('first attempt', () => {
        
    });
    it('second attempt', () => {
        
    });
});