import { test, firefox, chromium } from '@playwright/test';

test('Excercise 3', async ({ }) => {
  const browser = await firefox.launch();
  console.log(browser.contexts().length);
  const context = await browser.newContext();
  console.log(browser.contexts().length);
  const page = await context.newPage();
  await page.goto('https://playwright.dev');

  await page.waitForTimeout(2000);
  await context.close();
  await browser.close();
}); 

test.describe('Excercise 4', () => {
  test('Excercise 4.1', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto('https://playwright.dev/docs/intro');

    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev/docs/writing-tests');
    const pages = context.pages();
    console.log(pages.length);
    
    await page1.waitForTimeout(2000);
  });
}); 

test.describe('Excercise 5', () => {
  test('Excercise 5.1', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://playwright.dev');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.goto('https://github.com');

    await page.once('load', () => {
      console.log('Page loaded!');
    });

    await page.goBack();
    await context.close();
  });
});