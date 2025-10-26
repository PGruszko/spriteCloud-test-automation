const { test, expect } = require('@playwright/test');

test.describe('Sauce Demo - Failed Login Validations', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // Close the browser after each test
  test.afterEach(async ({ page }) => {
    await page.close();
  });


  // Validate failed login with invalid password
  test('Validate failed login with invalid password', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    // Validate the error message is visible
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    // Get the error text 
    const errorText = await page.locator('[data-test="error"]').textContent();
    // Validate the error text is correct
    expect(errorText).toContain('Username and password do not match any user in this service');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  // Validate failed login with locked out user
  test('Validate failed login with locked out user', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    // Get the error text and validate the error text is correct
    const errorText = await page.locator('[data-test="error"]').textContent();
    expect(errorText).toContain('Sorry, this user has been locked out');
    
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  // Validate failed login with empty username
  test('Validate failed login with empty username', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    // Validate the error message is visible
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    // Get the error text and validate the error text is correct
    const errorText = await page.locator('[data-test="error"]').textContent();
    expect(errorText).toContain('Username is required');
  });

  // Validate failed login with empty password
  test('Validate failed login with empty password', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();
    
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    const errorText = await page.locator('[data-test="error"]').textContent();
    expect(errorText).toContain('Password is required');
  });

  test('Validate failed login with empty credentials', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();
    
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    const errorText = await page.locator('[data-test="error"]').textContent();
    expect(errorText).toContain('Username is required');
  });
});

