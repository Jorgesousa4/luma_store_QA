import { CreateAccount, firstName, lastName, password, email  } from '../support/utils';


describe('CreateAccount', () => {

    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click()

    })

    it('Create account successfully', () => {
        CreateAccount()
      
        cy.screenshot('Create account successfully')
    })

    it('Create an account with existing data', () => {
            cy.get('#firstname').type(firstName)
            cy.get('#lastname').type(lastName)
            cy.get('#email_address').type(email)
            cy.get('#password').type(password)
            cy.get('#password-confirmation').type(password)
            cy.contains('button', 'Create an Account').click()
            cy.contains('There is already an account with this email address').should('be.visible')
        
            cy.screenshot('Create an account with existing data')
    })
  })

describe('LoginAccount', () => {

    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Sign In').click()
    })

    it('Login successfully', () => {
        cy.get('#email').type(email)
        cy.get('input[id="pass"][name="login[password]"]').type(password);
        cy.contains('button', 'Sign In').click()
        cy.contains('Welcome').should('be.visible')

        cy.screenshot('Login successfully')
    })

  })