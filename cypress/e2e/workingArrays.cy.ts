import { User } from "./models";

describe('Array of objects - users', () => {
    it('Getting users based on my fixture', () => {
        cy.fixture<{users:User[]}>('users.json')
        .its('users')
        .then(usrs => {
            usrs.forEach(user => {
                cy.log(user.username);
                cy.log(user.password);
            })
        })
    });
});