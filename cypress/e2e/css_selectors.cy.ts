describe("locators", () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    });
    it("contains example", () => {
        cy.contains("Button with Dynamic ID")
    });
    it('cy.get + cy.find example', () =>{
        cy.get('div').find('button')
    });
    it("css selector example", () => {
        cy.get('#efde7808-a8b9-bcba-deb2-5e6365aaea11').should('have.text', 'Button with Dynamic ID')
    });
});