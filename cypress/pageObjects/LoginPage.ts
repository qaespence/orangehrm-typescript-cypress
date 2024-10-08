export class LoginPage {
    private usernameInput = '[name="username"]';
    private passwordInput = '[name="password"]';
    private loginButton = '.oxd-button';
  
    public enterUsername(username: string) {
      cy.get(this.usernameInput).type(username);
    }
  
    public enterPassword(password: string) {
      cy.get(this.passwordInput).type(password);
    }
  
    public clickLogin() {
      cy.get(this.loginButton).click();
    }

    public clearUsername() {
        cy.get(this.usernameInput).clear();
    }
    
    public clearPassword() {
        cy.get(this.passwordInput).clear();
    }
  
    public getErrorMessageInvalidCredentials() {
      return cy.get('.oxd-text').contains('Invalid credentials');
    }

    public getErrorMessageMissing() {
        return cy.get('.oxd-text').contains('Required');
    }

  }
  