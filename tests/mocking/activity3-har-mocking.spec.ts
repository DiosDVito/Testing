import { test, expect } from '@playwright/test';
import * as path from 'path';

const harPath = path.join(__dirname, 'harry-potter-api.har');

test.describe('Activity 3: Mocking with HAR Files', () => {
  test('create HAR file with mocked data', async ({ page, context }) => {
    await context.route('**/v1/characters*', async (route) => {
      const mockData = {
        data: [
          {
            attributes: {
              name: 'Harry Potter',
              house: 'Gryffindor'
            }
          },
          {
            attributes: {
              name: 'Hermione Granger',
              house: 'Gryffindor'
            }
          }
        ]
      };
      await route.fulfill({ json: mockData });
    }, { times: 1 });

    await context.routeFromHAR(harPath, {
      url: '**/v1/characters*',
      update: true,
    });

    await page.goto('http://localhost:59368/harry-potter-list.html');
    
    await page.waitForTimeout(1000);
    
    console.log(`HAR file has been recorded to: ${harPath}`);
  });

  test('replay API interactions from HAR file', async ({ page, context }) => {
    await context.routeFromHAR(harPath, {
      url: '**/v1/characters*',
    });

    await page.goto('http://localhost:59368/harry-potter-list.html');
    
    await page.waitForTimeout(1000);
    
    await expect(page.getByText('Harry Potter')).toBeVisible();
    await expect(page.getByText('Harry Potter - Gryffindor')).toBeVisible();
  });

  test('modify and use HAR file', async ({ page, context }) => {
    const mockData = {
      data: [
        {
          attributes: {
            name: 'Harry Potter',
            house: 'Gryffindor'
          }
        },
        {
          attributes: {
            name: 'Daniel Esparza',
            house: 'Ravenclaw'
          }
        }
      ]
    };
    
    await context.route('**/v1/characters*', async (route) => {
      await route.fulfill({ json: mockData });
    });

    await page.goto('http://localhost:59368/harry-potter-list.html');
    
    await page.waitForTimeout(1000);
    
    await expect(page.getByText('Daniel Esparza')).toBeVisible();
    await expect(page.getByText('Daniel Esparza - Ravenclaw')).toBeVisible();
  });
}); 