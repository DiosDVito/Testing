import { test, expect } from '@playwright/test';

test.describe('Activity 1: Weather API Mocking', () => {
  test('should display mocked weather data for Paris', async ({ page }) => {
    await page.route('**/forecast*', async (route) => {
      const json = {
        city: 'Paris',
        temperature: '24°C',
        condition: 'Sunny'
      };
      await route.fulfill({ json });
    });

    await page.goto('http://localhost:59368/weather.html');
    await page.getByRole('textbox', { name: /enter city/i }).fill('Paris');
    await page.getByRole('button', { name: 'Get Weather' }).click();
    
    await expect(page.getByText(/Paris.*24°C.*Sunny/)).toBeVisible();
  });

  test('should handle API error gracefully', async ({ page }) => {
    await page.route('**/forecast*', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    });

    await page.goto('http://localhost:59368/weather.html');
    await page.getByRole('textbox', { name: /enter city/i }).fill('Paris');
    await page.getByRole('button', { name: 'Get Weather' }).click();
    
    await expect(page.getByText(/undefined.*undefined.*undefined/)).toBeVisible();
  });
}); 