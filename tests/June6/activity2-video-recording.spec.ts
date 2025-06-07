import { test, expect } from '@playwright/test';

test.describe('Activity 2: Record a Video', () => {
  test('should search for Paris weather', async ({ page }) => {
    // Mock the API response for Paris
    await page.route('https://api.weather.com/forecast*', async route => {
      const url = route.request().url();
      if (url.includes('city=Paris')) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            city: 'Paris',
            temperature: '22°C',
            condition: 'Sunny'
          })
        });
      } else {
        await route.continue();
      }
    });
    
    await page.goto('http://localhost:8080/weather.html');
    
    await page.getByRole('textbox', { name: /enter city/i }).fill('Paris');
    await page.getByRole('button', { name: 'Get Weather' }).click();
    
    await expect(page.getByText(/Paris: 22°C, Sunny/)).toBeVisible();
  });

  test('should search for London weather', async ({ page }) => {
    // Mock the API response for London
    await page.route('https://api.weather.com/forecast*', async route => {
      const url = route.request().url();
      if (url.includes('city=London')) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            city: 'London',
            temperature: '18°C',
            condition: 'Cloudy'
          })
        });
      } else {
        await route.continue();
      }
    });
    
    await page.goto('http://localhost:8080/weather.html');
    
    await page.getByRole('textbox', { name: /enter city/i }).fill('London');
    await page.getByRole('button', { name: 'Get Weather' }).click();
    
    await expect(page.getByText(/London: 18°C, Cloudy/)).toBeVisible();
  });
}); 