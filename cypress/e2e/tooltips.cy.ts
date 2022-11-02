describe('tooltips describe', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}tool-tips`)
    });
    it('Tooltip button', () => {
        cy.get('#toolTipButton').realHover();
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
    });
    it.only('A tag with tooltip', () => {
        cy.contains('a', 'Contrary').realHover();
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Contrary')
    });
});