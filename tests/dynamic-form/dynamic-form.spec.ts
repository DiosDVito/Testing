import { test, expect } from '@playwright/test';
import * as path from 'path';

test.describe('Dynamic Form Test', () => {
  const getLocalFilePath = () => {
    return 'file://' + path.resolve(__dirname, 'dynamic-form.html');
  };

  test('should complete the dynamic form flow', async ({ page }) => {
    // Navigate to the dynamic form page
    await page.goto(getLocalFilePath());
    
    // Verify initial state: form is hidden and start button is visible
    await expect(page.getByTestId('form')).toBeHidden();
    await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
    
    // Click the start button to show the form
    await page.getByRole('button', { name: 'Start' }).click();
    
    // Verify form is now visible
    await expect(page.getByTestId('form')).toBeVisible();
    
    // Verify the next button is initially disabled
    await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();
    
    // Enter a name in the input field
    await page.getByRole('textbox', { name: 'Name' }).fill('Test User');
    
    // Verify the next button is now enabled
    await expect(page.getByRole('button', { name: 'Next' })).toBeEnabled();
    
    // Click the next button
    await page.getByRole('button', { name: 'Next' }).click();
    
    // Verify loader appears
    await expect(page.getByTestId('loader')).toBeVisible();
    await expect(page.getByRole('combobox')).toBeHidden();
    
    // Wait for options to appear (auto-waiting locator will wait for visibility)
    await expect(page.getByRole('combobox')).toBeVisible();
    
    // Verify loader is hidden
    await expect(page.getByTestId('loader')).toBeHidden();
    
    // Select an option from the dropdown
    await page.getByRole('combobox').selectOption('1');
    
    // Verify the selected option
    const selectedValue = await page.getByRole('combobox').evaluate(select => (select as HTMLSelectElement).value);
    expect(selectedValue).toBe('1');
  });
}); 