import { test, expect } from '@playwright/test';

test.describe('Activity 1: Parameterize Login tests', () => {
  const testUsers = [
    { username: 'invalid@example.com', password: 'wrongpassword', expectedError: 'Incorrect username or password' },
    { username: 'test@test.com', password: 'short', expectedError: 'Incorrect username or password' },
    { username: 'notanemail', password: 'password123', expectedError: 'Incorrect username or password' }
  ];

  for (const user of testUsers) {
    test(`should show error for ${user.username}`, async ({ page }) => {
      await page.goto('https://github.com/login');
      
      await page.getByRole('textbox', { name: 'Username or email address' }).fill(user.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
      
      await page.getByRole('button', { name: 'Sign in', exact: true }).first().click();
      
      await expect(page.getByText(user.expectedError, { exact: false })).toBeVisible();
    });
  }
}); 