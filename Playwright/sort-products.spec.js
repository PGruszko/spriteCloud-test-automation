const { test } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');
const InventoryPage = require('./pages/InventoryPage');

test.describe('Sauce Demo - Sort Products Z-A', () => {
  
  test('Sort items by name Z-A and validate sorting is correct', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await inventoryPage.validateInventoryVisible();
    await inventoryPage.sortProductsBy('za');
    await inventoryPage.validateSortedZtoA();
    await inventoryPage.validateFirstProductName('Test.allTheThings() T-Shirt (Red)');
  });
});

