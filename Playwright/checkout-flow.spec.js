const { test, expect } = require('@playwright/test');

/**
 * Generates a random Dutch first name
 */
function getRandomDutchFirstName() {
  const dutchFirstNames = [
    'Jan', 'Pieter', 'Klaas', 'Daan', 'Thijs', 'Bram', 'Lars', 'Sem', 'Lucas', 'Milan',
    'Anna', 'Emma', 'Sophie', 'Lisa', 'Sanne', 'Eva', 'Julia', 'Lotte', 'Fleur', 'Isa',
    'Hendrik', 'Willem', 'Dirk', 'Joris', 'Maarten', 'Jeroen', 'Ruben', 'Tim', 'Jesse', 'Max'
  ];
  return dutchFirstNames[Math.floor(Math.random() * dutchFirstNames.length)];
}

/**
 * Generates a random Dutch last name
 */
function getRandomDutchLastName() {
  const dutchLastNames = [
    'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer', 
    'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos', 'Peters', 'Hendriks', 'van Leeuwen', 
    'Dekker', 'Brouwer', 'de Wit', 'Dijkstra', 'Smits', 'de Graaf', 'van der Meer', 'van Houten',
    'Koning', 'Vermeulen', 'van den Brink', 'Jansen', 'van Beek', 'Koster'
  ];
  return dutchLastNames[Math.floor(Math.random() * dutchLastNames.length)];
}

/**
 * Generates a random valid Dutch postal code (format: 1234AB)
 */
function getRandomDutchPostalCode() {
  const digits = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
  const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + 
                  String.fromCharCode(65 + Math.floor(Math.random() * 26)); // AA-ZZ
  return `${digits}${letters}`;
}
test.describe.serial('Sauce Demo - Complete Purchase Flow', () => {
  let page;
  let context;
  let selectedProductNames = [];
  let numberOfItemsAddedToCart = 4;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
      slowMo: 1000
    });
    page = await context.newPage();
  });
// Close the browser after all tests
  test.afterAll(async () => {
    await page.close();
    await context.close();
  });

  test('Test 1: Open browser and login successfully', async () => {
    await page.goto('https://www.saucedemo.com/');
    // Validate the title is correct
    await expect(page).toHaveTitle(/Swag Labs/);
    // Fill the username
    await page.locator('[data-test="username"]').fill('standard_user');
    // Fill the password and click the login button
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Validate the inventory container is visible
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    // Validate the URL is correct
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Test 2: Remain logged in and add at least 2 random products to cart', async () => {
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    
    // Clear the array to ensure clean state
    selectedProductNames = [];
   
    // Get all inventory items
    const inventoryItems = page.locator('.inventory_item');
    const itemCount = await inventoryItems.count();
    
    // Randomly select at least 2 products (between 2 and total item count)
    const minProductsToAdd = 1;
    const maxProductsToAdd = itemCount;
    
    // Generate unique random indices
    const randomIndices = [];
    while (randomIndices.length < numberOfItemsAddedToCart) {
      const indexOfProductsToAdd = Math.floor(Math.random() * (maxProductsToAdd - minProductsToAdd)) + minProductsToAdd;
      if (!randomIndices.includes(indexOfProductsToAdd)) {
        randomIndices.push(indexOfProductsToAdd);
      }
    }
    
    console.log(`Adding ${randomIndices} products to cart...`);
    
    // Add each randomly selected product to cart
    for (let i = 0; i < randomIndices.length; i++) {
      const item = inventoryItems.nth(randomIndices[i]);
      const productName = await item.locator('.inventory_item_name').textContent();
      selectedProductNames.push(productName);
      await item.locator('[data-test^="add-to-cart-"]').click();
      await page.waitForTimeout(1500);
    }
    
    console.log(`Selected products: ${selectedProductNames.join(', ')}`);
    // Validate the cart badge is visible and has the correct text
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText(numberOfItemsAddedToCart.toString());
  });

  test('Test 3: Click cart icon and proceed to checkout', async () => {
    await page.locator('[data-test="shopping-cart-link"]').click();
    // Validate the URL is correct
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    // Validate the cart items are visible and have the correct count
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(selectedProductNames.length);
    // Validate all randomly selected products are in the cart
    const itemNames = await page.locator('.inventory_item_name').allTextContents();
    for (const productName of selectedProductNames) {
      expect(itemNames).toContain(productName);
    }
    await page.waitForTimeout(1500);
    // Click the checkout button
    await page.locator('[data-test="checkout"]').click();
    // Validate the URL is correct
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  });

  test('Test 4: Provide checkout information from Holland and continue', async () => {
    await expect(page.locator('[data-test="firstName"]')).toBeVisible();
    
    // Generate random Dutch first name, last name and postal code
    const firstName = getRandomDutchFirstName();
    const lastName = getRandomDutchLastName();
    const postalCode = getRandomDutchPostalCode();
    
    console.log(`Checkout information: ${firstName} ${lastName}, ${postalCode}`);
    
    await page.locator('[data-test="firstName"]').fill(firstName);
    await page.locator('[data-test="lastName"]').fill(lastName);
    await page.locator('[data-test="postalCode"]').fill(postalCode);
    await page.waitForTimeout(1500);
    
    await page.locator('[data-test="continue"]').click();
    await page.waitForTimeout(1500);
    
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  });

  test('Test 5: Verify prices in Checkout Overview', async () => {
    await expect(page.locator('[data-test="checkout-summary-container"]')).toBeVisible();
    await page.waitForTimeout(2000);
    
    // Get the item prices  
    const itemPrices = await page.locator('.inventory_item_price').allTextContents();
    
    let calculatedSubtotal = 0;
    // Calculate the subtotal
    for (const priceText of itemPrices) {
      const price = parseFloat(priceText.replace('$', ''));
      calculatedSubtotal += price;
    }
    // Get the subtotal text and validate the subtotal is correct
    const subtotalText = await page.locator('[data-test="subtotal-label"]').textContent();
    const displayedSubtotal = parseFloat(subtotalText.replace('Item total: $', ''));
    
    expect(calculatedSubtotal).toBe(displayedSubtotal);
    
    const taxText = await page.locator('[data-test="tax-label"]').textContent();
    const tax = parseFloat(taxText.replace('Tax: $', ''));

    const percentageCalculatedTax = Math.floor(tax/calculatedSubtotal*100);
    console.log(`percentageCalculatedTax: ${percentageCalculatedTax}`);
    console.log(`tax: ${tax}`);
    const reCalculatedSubtotal = Math.round(percentageCalculatedTax*calculatedSubtotal)/100;
    
    expect(reCalculatedSubtotal).toBe(tax);
    
    const totalText = await page.locator('[data-test="total-label"]').textContent();
    const displayedTotal = parseFloat(totalText.replace('Total: $', ''));
    
    const calculatedTotal = Math.round((calculatedSubtotal + tax)*100)/100;
    expect(displayedTotal).toBe(calculatedTotal);
    // Click the finish button
    await page.locator('[data-test="finish"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    // Validate the complete header is visible and has the correct text
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  });
});

