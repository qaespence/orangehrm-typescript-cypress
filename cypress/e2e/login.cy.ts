import { LoginPage } from '../pageObjects/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('Should login successfully with valid credentials', () => {
    cy.visit('/');
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

    // Assertion
    dashboardPage.verifyDashboardVisible();
  });

  it('Should show an error for invalid credentials', () => {
    cy.visit('/');
    loginPage.enterUsername('invalid');
    loginPage.enterPassword('invalid');
    loginPage.clickLogin();

    // Assertion
    loginPage.getErrorMessageInvalidCredentials().should('exist');
  });

  it('Should show an error for missing username', () => {
    cy.visit('/');
    loginPage.enterUsername('a');
    loginPage.clearUsername();

    // Assertion
    loginPage.getErrorMessageMissing().should('have.length', 1);
  });

  it('Should show an error for missing password', () => {
    cy.visit('/');
    loginPage.enterPassword('a');
    loginPage.clearPassword();

    // Assertion
    loginPage.getErrorMessageMissing().should('have.length', 1);
  });

  it('Should show an error for missing credentials', () => {
    cy.visit('/');
    loginPage.enterUsername('a');
    loginPage.clearUsername();
    loginPage.enterPassword('a');
    loginPage.clearPassword();

    // Assertion
    loginPage.getErrorMessageMissing().should('have.length', 1); // unable to detect multiple Required labels
  });

});
