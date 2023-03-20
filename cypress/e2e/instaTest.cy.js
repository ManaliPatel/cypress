
describe('instaPage test', () => {
    beforeEach( () => {
        cy.visit('https://instapage.com');
    })
    it('failed login test', () => {
        cy.get('.icon-hamburger:eq(0)').click();
        cy.contains('Login').click({force: true});
        cy.get('input[name="email"]').type('mpatel3455@gmail.com');
        cy.get('input[name="password"]').type('Autodesk1234');
        cy.get('button[type="submit"]').click();
        cy.get('.c-alert__text').should('have.text','Incorrect Email or Password');
    })

    it('demo button test', () =>{
        cy.contains('GET STARTED').click({force: true});
        cy.scrollTo('bottom');
        cy.contains('Privacy Policy').click({force: true});
        cy.url().should('include','plans');
        cy.get('a[href="/privacy-policy"]').should('have.attr', 'target','_blank')
    })

    it.only('browser library', () => {
        cy.get('.icon-hamburger:eq(0)').click();
        // cy.contains('Resources').click('force: true');
        // cy.contains('Resources Library').click();

        cy.get('.expand-item.js-expand-item').then(($el) => {
            console.log($el.text());
            if($el.text() == 'Resources'){
                cy.wrap($el.children('header')).click('force: true');
            }
        })
    })

})