const { firefox } = require('@playwright/test');

async function runActivity() {
  const browser = await firefox.launch();
  
  console.log('Browser contexts length before creating new context:', browser.contexts().length);
  
  const context = await browser.newContext();
  
  console.log('Browser contexts length after creating new context:', browser.contexts().length);
  
  const page = await context.newPage();
  
  await page.goto('https://playwright.dev');
  
  await context.close();
  await browser.close();
}

runActivity().catch(console.error); 