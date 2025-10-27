const { expect } = require('@playwright/test');

/**
 * Page Object Model for the Inventory/Products Page
 * Encapsulates all product listing and cart-related interactions
 */
class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.productSortDropdown = page.locator('[data-test="product-sort-container"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.productNames = page.locator('.inventory_item_name');
  }

  /**
   * Verify the inventory container is visible
   */
  async validateInventoryVisible() {
    await expect(this.inventoryContainer).toBeVisible();
  }

  /**
   * Verify the page URL is correct
   */
  async validateURL() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }

  /**
   * Get the count of inventory items
   * @returns {Promise<number>} Number of inventory items
   */
  async getItemCount() {
    return await this.inventoryItems.count();
  }

  /**
   * Add a specific product to cart by index
   * @param {number} index - Index of the product to add
   * @returns {Promise<string>} Name of the added product
   */
  async addProductToCartByIndex(index) {
    const item = this.inventoryItems.nth(index);
    const productName = await item.locator('.inventory_item_name').textContent();
    await item.locator('[data-test^="add-to-cart-"]').click();
    return productName;
  }

  /**
   * Add multiple random products to cart
   * @param {number} count - Number of products to add
   * @returns {Promise<string[]>} Array of added product names
   */
  async addRandomProductsToCart(count) {
    const itemCount = await this.getItemCount();
    const selectedProductNames = [];
    
    // Generate unique random indices
    const randomIndices = [];
    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * itemCount);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    
    console.log(`Adding ${count} products at indices: ${randomIndices}`);
    
    // Add each randomly selected product to cart
    for (const index of randomIndices) {
      const productName = await this.addProductToCartByIndex(index);
      selectedProductNames.push(productName);
      await this.page.waitForTimeout(1500);
    }
    
    console.log(`Selected products: ${selectedProductNames.join(', ')}`);
    return selectedProductNames;
  }

  /**
   * Get the cart badge count
   * @returns {Promise<string>} Cart badge count as string
   */
  async getCartBadgeCount() {
    return await this.cartBadge.textContent();
  }

  /**
   * Verify the cart badge shows expected count
   * @param {number} expectedCount - Expected number of items in cart
   */
  async validateCartBadgeCount(expectedCount) {
    await expect(this.cartBadge).toHaveText(expectedCount.toString());
  }

  /**
   * Click the shopping cart icon to go to cart page
   */
  async goToCart() {
    await this.shoppingCartLink.click();
  }

  /**
   * Sort products by the given option
   * @param {string} sortOption - Sort option value ('az', 'za', 'lohi', 'hilo')
   */
  async sortProductsBy(sortOption) {
    await this.productSortDropdown.selectOption(sortOption);
  }

  /**
   * Get all product names currently displayed
   * @returns {Promise<string[]>} Array of product names
   */
  async getProductNames() {
    return await this.productNames.allTextContents();
  }

  /**
   * Verify products are sorted in reverse alphabetical order (Z-A)
   */
  async validateSortedZtoA() {
    const productNames = await this.getProductNames();
    const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));
    expect(productNames).toEqual(sortedNames);
  }

  /**
   * Verify the first product name matches expected value
   * @param {string} expectedName - Expected product name
   */
  async validateFirstProductName(expectedName) {
    const productNames = await this.getProductNames();
    expect(productNames[0]).toBe(expectedName);
  }
}

module.exports = InventoryPage;

