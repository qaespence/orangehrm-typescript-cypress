# orangehrm-typescript-cypress
This project is an automated testing framework for the web/browser UI of https://opensource-demo.orangehrmlive.com/ using NodeJS and Cypress. 

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/qaespence/orangehrm-typescript-cypress
   ```

2. **Navigate into the project folder**:
   ```bash
   cd orangehrm-typescript-cypress
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Tests

### Run tests in the Cypress Test Runner (interactive mode):

```bash
npx cypress open
```

### Run tests in headless mode:

```bash
npx cypress run
```

## Folder Structure

```
orangehrm-typescript-cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js                  # Test file for the Login page
│   │   └── ...
│   ├── pageObjects/
│   │   ├── Login.js                     # Page Object Model for the Login page
│   │   └── ...
│   ├── fixtures/
│   ├── support/
│   └── screenshots/                     # Folder for Cypress screenshots
│   └── videos/                          # Folder for Cypress videos
│
├── node_modules/                         # Node.js dependencies (auto-generated)
├── .gitignore                            # Git ignore file
├── README.md                             # Project documentation
├── cypress.config.ts                     # Cypress configuration file
├── package.json                          # Project metadata and dependencies
├── package-lock.json                     # Dependency tree (auto-generated)
├── README.md                             # This file
└── tsconfig.json                         # TypeScript config file
```

## Writing Tests

This project uses the **Page Object Model (POM)** to keep the test logic and page interaction separate.

- **Test Files**: Located in `cypress/e2e/...`
- **Page Objects**: Located in `cypress/pages/...`

You can add new test cases and page objects as the framework expands.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
