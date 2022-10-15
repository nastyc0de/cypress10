
describe("locators", () => {
    beforeEach(() => {
        cy.visit("/classattr");
    });
    it("xpath example", () => {
        cy.xpath(`/html/body/section/div/p[3]`).should('contain.text', 'Correct')
    });
    it("Find by class (middle and spaces)", () => {
        cy.xpath(
            `/html/body/section/div/button[3]`
        ).should('have.css', 'background-color', 'rgb(255, 193, 7)')
    });
    
});
