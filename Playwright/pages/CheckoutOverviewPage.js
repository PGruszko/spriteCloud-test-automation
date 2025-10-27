const { expect } = require("@playwright/test");

/**
 * Page Object Model for the Checkout Overview Page (Step Two)
 * Encapsulates order summary and price verification
 */
class CheckoutOverviewPage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.summaryContainer = page.locator(
      '[data-test="checkout-summary-container"]'
    );
    this.itemPrices = page.locator(".inventory_item_price");
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.taxLabel = page.locator('[data-test="tax-label"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
  }

  /**
   * Verify the page URL is correct
   */
  async validateURL() {
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  }

  /**
   * Verify the summary container is visible
   */
  async validateSummaryVisible() {
    await expect(this.summaryContainer).toBeVisible();
    await this.page.waitForTimeout(2000);
  }

  /**
   * Get all item prices
   * @returns {Promise<number[]>} Array of item prices
   */
  async getItemPrices() {
    const priceTexts = await this.itemPrices.allTextContents();
    return priceTexts.map((priceText) =>
      parseFloat(priceText.replace("$", ""))
    );
  }

  /**
   * Calculate subtotal from item prices
   * @returns {Promise<number>} Calculated subtotal
   */
  async calculateSubtotal() {
    const prices = await this.getItemPrices();
    return prices.reduce((sum, price) => sum + price, 0);
  }

  /**
   * Get displayed subtotal from the page
   * @returns {Promise<number>} Displayed subtotal
   */
  async getDisplayedSubtotal() {
    const subtotalText = await this.subtotalLabel.textContent();
    return parseFloat(subtotalText.replace("Item total: $", ""));
  }

  /**
   * Get displayed tax from the page
   * @returns {Promise<number>} Displayed tax
   */
  async getDisplayedTax() {
    const taxText = await this.taxLabel.textContent();
    return parseFloat(taxText.replace("Tax: $", ""));
  }

  /**
   * Get displayed total from the page
   * @returns {Promise<number>} Displayed total
   */
  async getDisplayedTotal() {
    const totalText = await this.totalLabel.textContent();
    return parseFloat(totalText.replace("Total: $", ""));
  }

  /**
   * Verify the subtotal matches calculated value
   */
  async validateSubtotal() {
    const calculatedSubtotal = await this.calculateSubtotal();
    const displayedSubtotal = await this.getDisplayedSubtotal();
    expect(calculatedSubtotal).toBe(displayedSubtotal);
  }

  /**
   * Verify the tax is calculated correctly
   */
  async validateTax() {
    const calculatedSubtotal = await this.calculateSubtotal();
    const tax = await this.getDisplayedTax();

    const percentageCalculatedTax = Math.floor(
      (tax / calculatedSubtotal) * 100
    );
    console.log(`percentageCalculatedTax: ${percentageCalculatedTax}`);
    console.log(`tax: ${tax}`);

    const reCalculatedSubtotal =
      Math.round(percentageCalculatedTax * calculatedSubtotal) / 100;
    expect(reCalculatedSubtotal).toBe(tax);
  }

  /**
   * Verify the total is calculated correctly
   */
  async validateTotal() {
    const calculatedSubtotal = await this.calculateSubtotal();
    const tax = await this.getDisplayedTax();
    const displayedTotal = await this.getDisplayedTotal();

    const calculatedTotal = Math.round((calculatedSubtotal + tax) * 100) / 100;
    expect(displayedTotal).toBe(calculatedTotal);
  }

  /**
   * Verify all prices (subtotal, tax, total) are correct
   */
  async validateAllPrices() {
    await this.validateSubtotal();
    await this.validateTax();
    await this.validateTotal();
  }

  /**
   * Click the finish button to complete the order
   */
  async finishOrder() {
    await this.finishButton.click();
  }

  /**
   * Click cancel to go back to inventory
   */
  async cancel() {
    await this.cancelButton.click();
  }
}

module.exports = CheckoutOverviewPage;
