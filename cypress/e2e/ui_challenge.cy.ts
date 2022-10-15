describe.skip('Click challenge', () => {
beforeEach(() => {
        cy.visit('/click')
    })
    it("class assertions",() => {
        cy.get('#badButton').click().should('have.class', 'btn-success')
    })
    it("background assertions",() => {
        cy.get('#badButton')
        .click()
        .should('have.css', 'background-color', 'rgb(40, 167, 69)')
    })
})
describe.skip('Hover challenge', () => {
    beforeEach(() => {
            cy.visit('/mouseover')
        })
        it("hover with cypress workaround",() => {
            cy.get('.text-primary')
            .trigger('mouseover')
        })
        it("hover with real hover",() => {
            cy.get('.text-primary')
            .realHover()
        })
        
    })
describe('Dynamic Table', () => {
    beforeEach(() => {
            cy.visit('/dynamictable')
        })
        it("CPU chrome test",() => {
            cy.get(`div[role='row'] span`).each(($cell) =>{
                if ($cell.text().includes('Chrome')) {
                    let chromeRowValues:string[] = [];
                    chromeRowValues.push($cell.next().text());
                    chromeRowValues.push($cell.next().next().text());
                    chromeRowValues.push($cell.next().next().next().text());
                    chromeRowValues.push($cell.next().next().next().next().text());
                    chromeRowValues.forEach((chromeValue) => {
                        if (chromeValue.includes('%')) {
                            cy.get('.bg-warning').should(
                                'have.text',
                                `Chrome CPU: ${chromeValue}`
                            )
                        }
                    })
                }
            })
        })
    })