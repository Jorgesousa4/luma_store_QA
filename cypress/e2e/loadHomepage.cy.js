describe('Validate home upload', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.viewport(1920, 1080)
    })
  
    it('Validate header', () => {
        cy.get('.logo > img').should('be.visible')
        cy.get('#search').should('be.visible')
        cy.get('.showcart').should('be.visible')

        cy.screenshot('Validate header')

    })
    it('Validate options', () => {
        cy.contains('span','What\'s New').should('be.visible');
        cy.contains('span','Women').should('be.visible');
        cy.contains('span', 'Men').should('be.visible');
        cy.contains('span','Gear').should('be.visible');
        cy.contains('span','Training').should('be.visible');
        cy.contains('span','Sale').should('be.visible');

        cy.screenshot('Validate options')
    })
    it('Validate hot sellers', () => {
        cy.get('#maincontent img').should('have.attr', 'src').and('not.be.empty');
        cy.get('img').should('be.visible');

        cy.screenshot('Validate hot sellerss')
    })

    it('Validate content', () => {
        cy.get('.product-items').should('be.visible')
        cy.get('.product-item-details').should('be.visible')
        cy.get('.swatch-attribute-options').should('be.visible')

        cy.screenshot('Validate content')
    })
  })
  