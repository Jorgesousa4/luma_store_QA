import '../support/utils';

const validProduct = 'Shirt'
const shortProduct = 'aa'
const productWithShort = 'blusa'

describe('Validate header search field ', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.viewport(1920, 1080)
    })
  
    it('Validate search button enabled only when completed', () => {
        cy.get('#search').should('be.empty');
        cy.get('button[type="submit"].search').should('be.disabled');

        cy.screenshot('Validate search button enabled only when completed')
    })

    it('Validate search below 3 characters', () => {
        cy.get('#search')
          .type(shortProduct)
          .type('{enter}')
        cy.contains('Minimum Search query length is 3').should('be.visible')

        cy.screenshot('Validate search below 3 characters')
    })

    it('Validate search with existing item', () => {
        cy.get('#search').type(validProduct)
        cy.get('button[type="submit"].search').click()
        cy.get('.products').should('be.visible')

        cy.screenshot('Validate search with existing item')
    })

    it('Validate search with not existing item', () => {
        cy.get('#search').type(productWithShort)
        cy.get('button[type="submit"].search').click()

        cy.screenshot('Validate search with not existing item')
    })
    
    // it('Validate search for the last item in the list', () => {
    //     cy.get('#search').type(validProduct)
    //     cy.get('#search_autocomplete > ul')
    //     .find('li')
    //     .last()
    //     .click()
    
    //     cy.url().then((url) => {
    //         expect(url).to.contain('catalogsearch/result/?q');
    //       });
        
    //       cy.screenshot('Validate search for the last item in the list')
    // })
    
  })
  