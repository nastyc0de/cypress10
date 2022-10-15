describe('Using environment variable', () => {
    it('demo', () => {
        cy.log(`${Cypress.env('demoVar')}`)
    });
})