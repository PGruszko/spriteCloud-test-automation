const { test } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');

test.describe('Sauce Demo - Failed Login Validations', () => {
  
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // Validate failed login with invalid password
  test('Validate failed login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.validateErrorMessage('Username and password do not match any user in this service');
    await loginPage.validateLoginButtonVisible();
  });

  // Validate failed login with locked out user
  test('Validate failed login with locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.validateErrorMessage('Sorry, this user has been locked out');
    await loginPage.validateLoginButtonVisible();
  });

  // Validate failed login with empty username
  test('Validate failed login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', 'secret_sauce');
    await loginPage.validateErrorMessage('Username is required');
  });

  // Validate failed login with empty password
  test('Validate failed login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', '');
    await loginPage.validateErrorMessage('Password is required');
  });

  test('Validate failed login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', '');
    await loginPage.validateErrorMessage('Username is required');
  });
});

