describe('Broken image', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}broken`)
    });
    it('Not Broken Image Assertion', () => {
        cy.get('[src="/images/Toolsqa.jpg"]')
        .should('be.visible')
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    });

    it('Broken Image Assertion', () => {
        cy.get('[src="/images/Toolsqa_1.jpg"]')
        .should('be.visible')
        .and('have.prop', 'naturalWidth')
        .should('be.greaterThan', 0)
    });

})