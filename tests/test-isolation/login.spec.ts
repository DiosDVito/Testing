import { test, expect } from '@playwright/test';
import * as path from 'path';

test.describe('Login Simulation', () => {
  const getLocalFilePath = () => {
    return 'file://' + path.resolve(__dirname, 'login.html');
  };

  test('should login successfully and verify localStorage', async ({ page }) => {
    await page.goto(getLocalFilePath());
    
    await expect(page.getByTestId('status')).toHaveText('Not logged in');
    
    await page.getByRole('button', { name: 'Login' }).click();
    
    await expect(page.getByTestId('status')).toHaveText('Logged in as admin');
    
    const user = await page.evaluate(() => {
      return localStorage.getItem('user');
    });
    console.log('localStorage user value:', user);
    expect(user).toBe('admin');
  });

  test('should show not logged in status initially', async ({ page, context }) => {
    await context.clearCookies();
    
    await page.goto(getLocalFilePath());
    
    await expect(page.getByTestId('status')).toHaveText('Not logged in');
  });
}); 