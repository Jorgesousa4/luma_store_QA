import { clickColor, clickSize, counterCart, messageSucess, shoppingCartCounter, firstName, lastName, email, GenereteData, formattedAddress, city, postCode, phone } from "../support/utils"

describe('Shopping Cart', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.viewport(1920, 1080)
      
      })
  

    it('Add to cart', () => {
        shoppingCartCounter()
        messageSucess()
        counterCart('1')

        cy.screenshot('Add to cart')
        
      })

      it('Checkout sucess', () => {
          shoppingCartCounter()
          cy.wait(3000)
          cy.get('.showcart').click()
          cy.contains('button', 'Proceed to Checkout').click()
          
          GenereteData()
          
          cy.get('#customer-email', { timeout: 10000 })
            .should('be.visible') 
            .then(() => {
                cy.get('#customer-email').type(email); 
               });
            
            cy.get('input[name="firstname"]')
              .should('be.visible')
              .then((firstNameInput) => {
                cy.wrap(firstNameInput).type(firstName);
                  });
          
            cy.get('input[name="lastname"]')
              .should('be.visible')
              .then((lastNameInput) => {
                cy.wrap(lastNameInput).type(lastName);
                  });

          
            cy.get('input[name="street[0]"]')
              .should('be.visible')
              .then((streetInput) => {
                cy.wrap(streetInput).type(formattedAddress);
                  });

            cy.get('input[name="city"]')
              .should('be.visible')
              .then((cityInput) => {
                cy.wrap(cityInput).type(city);
                  });

            cy.get('select[name="region_id"]')
                .should('be.visible')
                .then((regionSelect) => {
                  cy.wrap(regionSelect).select(regionSelect.find('option').eq(1).val());
                    });

            cy.get('input[name="postcode"]')
              .should('be.visible')
              .then((postCodeInput) => {
                cy.wrap(postCodeInput).type(postCode);
                  });

            cy.get('input[name="telephone"]')
              .should('be.visible')
              .then((phoneInput) => {
                cy.wrap(phoneInput).type(phone);
                  }); 

            cy.get('input[type="radio"][value="tablerate_bestway"]').click();
            cy.contains('button', 'Next').click()
            cy.get('#billing-address-same-as-shipping-checkmo').click()
            cy.contains('button', 'Place Order').click()
            cy.contains('Thank you for your purchase!').should('be.visible')

            cy.screenshot('Checkout sucess')
      })
      
  })
  