export { baseUrl, CreateAccount, firstName, lastName, email, password, clickSize, clickColor, messageSucess, counterCart, shoppingCartCounter, GenereteData, formattedAddress, streetName, streetNumber, city, state, postCode, phone};

const baseUrl = 'https://magento.softwaretestingboard.com/';
const password = 'P@ssw0rd!123'; 
let firstName;
let lastName;
let email;
let formattedAddress;
let streetName;
let streetNumber; 
let city; 
let state;
let postCode; 
let phone;


function CreateAccount() {
    cy.request('https://randomuser.me/api/')
    .its('body.results[0]')
    .then((base) => {
        firstName = base.name.first;
        lastName = base.name.last;
        email = base.email;


        cy.get('#firstname').type(firstName)
        cy.get('#lastname').type(lastName)
        cy.get('#email_address').type(email)
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.contains('button', 'Create an Account').click()
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    })
}

function clickSize() {
    cy.get('.size > .swatch-attribute-options', { timeout: 10000 }).should('be.visible').then(($options) => {
        const $swatchOptions = $options.find('.swatch-option');
  
            if ($swatchOptions.length > 0) {
                cy.wrap($swatchOptions[0]).click();
            } else {
                throw new Error('No sizes returned');
            }
         });
}

function clickColor(){
    cy.get('.swatch-attribute.color > .swatch-attribute-options', { timeout: 10000 }).should('be.visible').then(($options) => {
        const $swatchOptions = $options.find('.swatch-option');

                if ($swatchOptions.length > 0) {
                    cy.wrap($swatchOptions[0]).click();
                } else {
                    throw new Error('No colors returned');
                }
            });
}

function messageSucess(){
    cy.get('.message-success').should('be.visible')
}

function counterCart(value){
    cy.get('.showcart > .counter')
    .contains(value)
}

function shoppingCartCounter(){
    cy.get('#ui-id-5').click()
    cy.get('.product-image-wrapper')
        .first()
        .click();

    clickSize()
    clickColor()

    cy.get('#product-addtocart-button').click()
}

function GenereteData(){
    
    cy.request('https://randomuser.me/api/')
    .its('body.results[0]')
    .then((base) => {
        firstName = base.name.first;
        lastName = base.name.last;
        email = base.email;
        streetName = base.location.street.name;
        streetNumber = base.location.street.number; 
        formattedAddress = `${streetName}, ${streetNumber}`;
        city = base.location.city;
        state = base.location.state;
        postCode = base.location.postcode;
        phone = base.phone;

        return {
            firstName, lastName, email, streetName, streetNumber, formattedAddress, city, state, postCode, phone
          };
    })
}