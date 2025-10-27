const { test } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');
const InventoryPage = require('./pages/InventoryPage');
const CartPage = require('./pages/CartPage');
const CheckoutPage = require('./pages/CheckoutPage');
const CheckoutOverviewPage = require('./pages/CheckoutOverviewPage');
const CheckoutCompletePage = require('./pages/CheckoutCompletePage');

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
  let loginPage;
  let inventoryPage;
  let cartPage;
  let checkoutPage;
  let checkoutOverviewPage;
  let checkoutCompletePage;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
      slowMo: 1000
    });
    page = await context.newPage();
    
    // Initialize page objects
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);
  });

  // Close the browser after all tests
  test.afterAll(async () => {
    await page.close();
    await context.close();
  });

  test('Test 1: Open browser and login successfully', async () => {
    await loginPage.goto();
    await loginPage.validateTitle();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.validateInventoryVisible();
    await inventoryPage.validateURL();
  });

  test('Test 2: Remain logged in and add at least 2 random products to cart', async () => {
    await inventoryPage.validateInventoryVisible();
    selectedProductNames = await inventoryPage.addRandomProductsToCart(numberOfItemsAddedToCart);
    await inventoryPage.validateCartBadgeCount(numberOfItemsAddedToCart);
  });

  test('Test 3: Click cart icon and proceed to checkout', async () => {
    await inventoryPage.goToCart();
    await cartPage.validateURL();
    await cartPage.validateCartItemCount(selectedProductNames.length);
    await cartPage.validateCartContainsProducts(selectedProductNames);
    await page.waitForTimeout(1500);
    await cartPage.proceedToCheckout();
    await checkoutPage.validateURL();
  });

  test('Test 4: Provide checkout information from Holland and continue', async () => {
    await checkoutPage.validateFormVisible();
    
    const firstName = getRandomDutchFirstName();
    const lastName = getRandomDutchLastName();
    const postalCode = getRandomDutchPostalCode();
    
    await checkoutPage.fillAndContinue(firstName, lastName, postalCode);
    await checkoutOverviewPage.validateURL();
  });

  test('Test 5: Verify prices in Checkout Overview', async () => {
    await checkoutOverviewPage.validateSummaryVisible();
    await checkoutOverviewPage.validateAllPrices();
    await checkoutOverviewPage.finishOrder();
    await checkoutCompletePage.validateURL();
    await checkoutCompletePage.validateSuccessHeader();
  });
});

