import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/index.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    defaultCommandTimeout: 10000
  }
});