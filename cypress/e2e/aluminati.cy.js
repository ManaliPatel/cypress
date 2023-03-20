
describe('test for aluminati', () => {
    it('test challenge',() => {
        cy.viewport(375,812);
        cy.visit('https://aluminati.net', { failOnStatusCode: false});
        // cy.log('-----------------');
        // cy.get('li a[href="https://www.aluminati.net/contact/"]').click()
    })
})