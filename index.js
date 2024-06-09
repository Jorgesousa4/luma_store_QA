const cypress = require('cypress');


const testFiles = [
  'cypress/e2e/loadHomepage.cy.js',
  'cypress/e2e/searchPageHeader.cy.js',
  'cypress/e2e/account.cy.js',
  'cypress/e2e/shoppingCart.cy.js',
];

const runTests = async () => {
  try {
    const results = await cypress.run({
      spec: testFiles,
    });

    console.log(results);

  } catch (error) {
    
    console.error(error);
    process.exit(1); 
  }
};

runTests();
