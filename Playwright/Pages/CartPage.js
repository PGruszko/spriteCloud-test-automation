const { expect } = require("@playwright/test");

/**
 * Page Object Model for the Shopping Cart Page
 * Encapsulates all cart-related interactions and validations
 */
class CartPage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.itemNames = page.locator(".inventory_item_name");
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]'
    );
  }

  /**
   * Verify the page URL is correct
   */
  async validateURL() {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
  }

  /**
   * Verify the cart has expected number of items
   * @param {number} expectedCount - Expected number of items in cart
   */
  async validateCartItemCount(expectedCount) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  /**
   * Get all item names in the cart
   * @returns {Promise<string[]>} Array of item names
   */
  async getItemNames() {
    return await this.itemNames.allTextContents();
  }

  /**
   * Verify cart contains all expected products
   * @param {string[]} expectedProductNames - Array of expected product names
   */
  async validateCartContainsProducts(expectedProductNames) {
    const itemNames = await this.getItemNames();
    for (const productName of expectedProductNames) {
      expect(itemNames).toContain(productName);
    }
  }

  /**
   * Click the checkout button to proceed to checkout
   */
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  /**
   * Click continue shopping to go back to inventory
   */
  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}

module.exports = CartPage;
