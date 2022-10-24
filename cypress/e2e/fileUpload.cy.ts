describe('Working with upload a file', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    })
    it('upload the file', () => {
        cy.get('#uploadFile').attachFile('59E.gif');
        cy.get('#uploadedFilePath').should('contain.text', '.gif')
    });
})