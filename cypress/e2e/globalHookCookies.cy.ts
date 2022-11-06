Cypress.session.clearAllSavedSessions();
describe('Global hooks & cookies', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}login`)
    });
    it('Success login', () => {
        cy.contains('#userName-value', 'alpha');
    });
    it('Counting cookies', () => {
        cy.getCookies().then((cookies) => {
            cy.log(`cookies ${cookies}`);
            expect(cookies).to.have.length(9)
        })
    });

});