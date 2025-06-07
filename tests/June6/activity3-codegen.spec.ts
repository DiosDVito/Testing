import { test, expect } from '@playwright/test';

test('Activity 3: Generate a test with Playwright Codegen in VS Code', async ({ page }) => {
  
  await page.goto('https://github.com/');
  await page.getByRole('form', { name: 'Create your GitHub account' }).getByPlaceholder('you@domain.com').click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('DiosDVito');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await page.getByRole('link', { name: 'Homepage' }).click();
  await page.getByRole('heading', { name: 'Sign in to GitHub' }).click();
  await page.getByRole('heading', { name: 'Build and ship software on a' }).click();
  await page.getByTestId('Grid-:Rqhb:').getByText('Join the world’s most widely').click();
  });

