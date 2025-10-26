const { test, expect } = require('@playwright/test');

test.describe('Sauce Demo - Sort Products Z-A', () => {
  
  test('Sort items by name Z-A and validate sorting is correct', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Login to the website
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Validate the inventory container is visible
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

    // Sort the products by name Z-A
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    
    // Get the product names
    const productNames = await page.locator('.inventory_item_name').allTextContents();

    // Sort the product names in reverse alphabetical order
    
    const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));

    // Validate the sorting is correct
    expect(productNames).toEqual(sortedNames);

    // Validate the first product is the correct one
    expect(productNames[0]).toBe('Test.allTheThings() T-Shirt (Red)');
  });
});

