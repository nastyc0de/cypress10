describe('Working with drag and drop', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}droppable`)
    });
    it('with a plugin', () => {
        cy.get('#draggable').drag('#droppable',{force:true})
    });
});