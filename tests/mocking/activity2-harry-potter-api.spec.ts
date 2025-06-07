import { test, expect } from '@playwright/test';

test.describe('Activity 2: Modifying API Response', () => {
  test('should add my name to characters list', async ({ page }) => {
    await page.route('**/v1/characters*', async (route) => {
      const response = await route.fetch();
      const originalJson = await response.json();
      
      originalJson.data.push({
        attributes: {
          name: 'Daniel Esparza',
          house: 'Gryffindor'
        }
      });
      
      await route.fulfill({ json: originalJson });
    });

    await page.goto('http://localhost:59368/harry-potter-list.html');
    
    await expect(page.getByText('Daniel Esparza')).toBeVisible();
    await expect(page.getByText('Daniel Esparza - Gryffindor')).toBeVisible();
  });

  test('should remove a character from the list', async ({ page }) => {
    let removedCharacter = '';
    
    await page.route('**/v1/characters*', async (route) => {
      const response = await route.fetch();
      const originalJson = await response.json();
      
      removedCharacter = originalJson.data[0].attributes.name;
      
      originalJson.data.splice(0, 1);
      
      await route.fulfill({ json: originalJson });
    });

    await page.goto('http://localhost:59368/harry-potter-list.html');
    
    await page.waitForSelector('#userList');
    
    await expect(page.getByText(removedCharacter, { exact: false })).not.toBeVisible();
  });
}); 