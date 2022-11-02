describe('Working with menus', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}menu`)
    });
    it('Menus with submenus', () => {
        cy.get('a').contains('Main Item 2').realHover();
        cy.contains('a', 'SUB SUB LIST »').realHover();
    });
});