

describe('logs in', () => {
    it('intercept one way', () => {
      cy.intercept('POST',"http://localhost:3001/login", {fixture: 'login.json'}).as('loginforUser');

       cy.visit("http://localhost:3000")
       cy.get('input[name="username"]').type('test111');
       cy.get('input[name="password"]').type('Autodesk1234');
       cy.contains('Sign In').click();
       cy.wait('@loginforUser')
       cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text','Get Started with Real World App');
    })

    it('intercept another way', () => {
        cy.intercept('POST',"http://localhost:3001/login", { statusCode: 200}).as('loginforUser');
  
         cy.visit("http://localhost:3000")
         cy.get('input[name="username"]').type('test111');
         cy.get('input[name="password"]').type('Autodesk1234');
         cy.contains('Sign In').click();
         cy.wait('@loginforUser')
         cy.get('[data-test="user-onboarding-dialog-title"]').should('have.text','Get Started with Real World App');
      })
})