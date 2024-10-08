export class DashboardPage {
    //private dashboardTitle = 'h1:contains("Dashboard")';
  
    public verifyDashboardVisible() {
      cy.get('.oxd-text').contains('Dashboard').should('be.visible');
    }
  }
  