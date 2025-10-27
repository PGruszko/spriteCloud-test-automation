const { expect } = require('@playwright/test');

/**
 * Page Object Model for the Login Page
 * Encapsulates all login-related interactions and validations
 */
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /**
   * Navigate to the Sauce Demo login page
   */
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  /**
   * Perform login with provided credentials
   * @param {string} username - Username to login with
   * @param {string} password - Password to login with
   */
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Verify the page title is correct
   */
  async validateTitle() {
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }

  /**
   * Verify error message is visible
   */
  async validateErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }

  /**
   * Get the error message text
   * @returns {Promise<string>} The error message text
   */
  async getErrorText() {
    return await this.errorMessage.textContent();
  }

  /**
   * Verify error message contains expected text
   * @param {string} expectedText - Expected text in error message
   */
  async validateErrorMessage(expectedText) {
    await this.validateErrorVisible();
    const errorText = await this.getErrorText();
    expect(errorText).toContain(expectedText);
  }

  /**
   * Verify login button is still visible (indicating failed login)
   */
  async validateLoginButtonVisible() {
    await expect(this.loginButton).toBeVisible();
  }
}

module.exports = LoginPage;

