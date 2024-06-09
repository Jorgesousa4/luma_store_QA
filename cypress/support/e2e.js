
import './commands'
import 'cypress-mochawesome-reporter/register'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
      return false;
    }
    return true;
  });

