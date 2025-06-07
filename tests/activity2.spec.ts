import { test, expect } from '@playwright/test';

test.describe('Mercado Libre Locators Test', () => {
  test('should demonstrate different locator strategies', async ({ page }) => {
    // Navigate to Mercado Libre México
    await page.goto('https://www.mercadolibre.com.mx/');

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Using getByRole() - For buttons, links, inputs, etc.
    // Example: Search button
    const searchButton = page.getByRole('button', { name: /buscar/i });
    await expect(searchButton).toBeVisible();

    // Using getByPlaceholder() - For input fields with placeholder text
    // Example: Search input field
    const searchInput = page.getByPlaceholder(/buscar productos/i);
    await expect(searchInput).toBeVisible();
    await searchInput.fill('iPhone');

    // Using getByRole() for the Ofertas link in the main navigation
    const ofertasLink = page.getByRole('link', { name: 'Ofertas', exact: true }).first();
    await expect(ofertasLink).toBeVisible();

    // Using getByRole() for images (as they should have role="img")
    // Check that we have at least some images on the page
    const productImages = page.getByRole('img');
    const count = await productImages.count();
    expect(count).toBeGreaterThan(0);
    
    // Verify that at least one image is visible
    await expect(productImages.first()).toBeVisible();
  });
}); 