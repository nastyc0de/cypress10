describe('Working with download a file', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    })
    it('download a file', () => {
        cy.get('a#downloadButton').click();
        cy.verifyDownload("sampleFile.jpeg");
    });
})