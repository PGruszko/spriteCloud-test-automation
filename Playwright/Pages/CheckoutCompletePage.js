const { expect } = require('@playwright/test');

/**
 * Page Object Model for the Checkout Complete Page
 * Encapsulates order completion confirmation
 */
class CheckoutCompletePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.completeText = page.locator('[data-test="complete-text"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  /**
   * Verify the page URL is correct
   */
  async validateURL() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  }

  /**
   * Verify the success header text
   * @param {string} expectedText - Expected header text (default: 'Thank you for your order!')
   */
  async validateSuccessHeader(expectedText = 'Thank you for your order!') {
    await expect(this.completeHeader).toHaveText(expectedText);
  }

  /**
   * Click back home button to return to inventory
   */
  async goBackHome() {
    await this.backHomeButton.click();
  }
}

module.exports = CheckoutCompletePage;

