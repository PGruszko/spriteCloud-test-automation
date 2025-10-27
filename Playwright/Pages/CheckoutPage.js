const { expect } = require('@playwright/test');

/**
 * Page Object Model for the Checkout Information Page (Step One)
 * Encapsulates checkout form interactions
 */
class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
  }

  /**
   * Verify the page URL is correct
   */
  async validateURL() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  }

  /**
   * Verify the first name input is visible
   */
  async validateFormVisible() {
    await expect(this.firstNameInput).toBeVisible();
  }

  /**
   * Fill in checkout information
   * @param {string} firstName - First name
   * @param {string} lastName - Last name
   * @param {string} postalCode - Postal code
   */
  async fillCheckoutInformation(firstName, lastName, postalCode) {
    console.log(`Checkout information: ${firstName} ${lastName}, ${postalCode}`);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  /**
   * Click the continue button to proceed to overview
   */
  async continue() {
    await this.page.waitForTimeout(1500);
    await this.continueButton.click();
    await this.page.waitForTimeout(1500);
  }

  /**
   * Fill checkout information and continue
   * @param {string} firstName - First name
   * @param {string} lastName - Last name
   * @param {string} postalCode - Postal code
   */
  async fillAndContinue(firstName, lastName, postalCode) {
    await this.fillCheckoutInformation(firstName, lastName, postalCode);
    await this.continue();
  }

  /**
   * Click cancel to go back to cart
   */
  async cancel() {
    await this.cancelButton.click();
  }
}

module.exports = CheckoutPage;

